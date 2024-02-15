import * as IssuerService from "./services/issuer.service";
import * as VerificationService from "./services/verification.service";

export const downloadRevocationList = async (issuerId, revocation_url) => {
    return await IssuerService.fetchRevocationList(issuerId, revocation_url);
}


export const verifyCredential = async (issuerDid, credential, revocationList) => {
    try {
        const credentialTampered = !await VerificationService.verifyCredential(issuerDid, credential);
        const revokedCredential = await VerificationService.checkRevocationStatus(revocationList, credential.id)
        const checks = [{
            active: null,
            revoked: revokedCredential ? 'NOK' : 'OK',
            expired: new Date(credential.expirationDate).getTime() < Date.now() ? 'NOK' : 'OK',
            proof: !!credentialTampered ? 'NOK' : 'OK',
        },];
        return {
            status: (checks[0].revoked === "OK" && checks[0].expired === "OK" && checks[0].proof === "OK") ? "OK" : "NOK",
            checks: checks,
        };
    } catch (e) {
        console.error("Error", e);
        throw e;
    }
}