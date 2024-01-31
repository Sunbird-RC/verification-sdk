import {Verifiable, W3CCredential} from "did-jwt-vc";
import {VcValidationResponse} from "./types/VcValidationResponse";
import {DIDDocument, Extensible} from "did-resolver";
import {verify as verifyJws} from "@decentralized-identity/ion-tools";
import {CONFIG, OPTIONS, REVOKED_CREDENTIALS, storeRevokedCredentials} from "./config";
import axios, {AxiosResponse} from "axios";

export const resolveDID = async (issuer: Extensible): Promise<DIDDocument> => {
    try {
        const verificationURL = `${CONFIG.identityServiceUrl}/did/resolve/${issuer}`;
        const dIDResponse: AxiosResponse = await axios.get(verificationURL);
        return dIDResponse.data as DIDDocument;
    } catch (err) {
        return null;
    }
}

export const getRevokedCredentialsList = async (fetchAgain?: boolean) => {
    if (REVOKED_CREDENTIALS.length > 0 && !fetchAgain) {
        return REVOKED_CREDENTIALS;
    }
    //TODO: store it locally
    const revocationListUrl = `${CONFIG.credentialServiceUrl}/credentials/revocation-list`;
    const response: AxiosResponse = await axios.get(revocationListUrl);
    const revocationList: any = response.data;
    storeRevokedCredentials(revocationList);
    return revocationList;
}

const verifyVcSign = async (credToVerify: Verifiable<W3CCredential>): Promise<VcValidationResponse> => {
    let validationResponse: VcValidationResponse = {isValid: false, message: "OK"};
    if (OPTIONS.validIssuers?.length > 0) {
        const isValidIssuer = OPTIONS.validIssuers.filter(issuer => issuer === `${credToVerify.issuer}`).length === 1;
        if (!isValidIssuer) {
            validationResponse.message = "Invalid issuer";
            return validationResponse;
        }
    }
    // calling identity service to verify the issuer DID
    const issuerDID: DIDDocument = await resolveDID(credToVerify.issuer);
    if (issuerDID === null) {
        validationResponse.message = "Issuer not found!";
        return validationResponse;
    }
    // verifying the jws using the issuer public key in the issuer did doc
    validationResponse.isValid = await verifyJws({
        jws: credToVerify?.proof?.proofValue,
        publicJwk: issuerDID.verificationMethod[0].publicKeyJwk,
    });
    validationResponse.message = validationResponse.isValid ? "OK" : "Invalid VC Signature";
    return validationResponse;
}

export const verifyCredential = async (credToVerify: Verifiable<W3CCredential>, revocationList?: Verifiable<W3CCredential>[]): Promise<VcValidationResponse> => {
    // verify issuer
    // verify sign
    let validationResponse: VcValidationResponse = await verifyVcSign(credToVerify);
    // check for expiry
    if (validationResponse.isValid) {
        validationResponse.isValid = new Date(credToVerify.expirationDate).getTime() >= Date.now();
        validationResponse.message = validationResponse.isValid ? "OK" : "VC Expired";
    }
    // check if the vc is revoked
    if (validationResponse.isValid && !OPTIONS.ignoreRevocationCheck) {
        if (!revocationList) {
            revocationList = await getRevokedCredentialsList();
        }
        validationResponse.isValid = revocationList.filter(revokedCred => revokedCred.id === credToVerify.id).length === 0;
        if (!validationResponse.isValid)
            validationResponse.message = "VC Revoked";
    }
    return validationResponse;
}
