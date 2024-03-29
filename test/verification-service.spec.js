import {expect} from 'chai';
import {verifyCredential} from "../lib/services/verification.service.js";

const did =     {
    "@context": [
        "https://www.w3.org/ns/did/v1"
    ],
    "id": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f",
    "alsoKnownAs": [],
    "service": [],
    "verificationMethod": [
        {
            "id": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f#key-0",
            "type": "Ed25519VerificationKey2020",
            "@context": "https://w3id.org/security/suites/ed25519-2020/v1",
            "controller": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f",
            "publicKeyMultibase": "z6MkwBN1HtfJrBXMtTsSH3HBgUJji3Z8vWTdVqoxshXzcJtP"
        }
    ],
    "authentication": [
        "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f#key-0"
    ],
    "assertionMethod": [
        "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f#key-0"
    ]
};

const VC = {
    "id": "did:rcw:164f4b00-0141-40ef-b34a-5b9e1d5dfeca",
    "type": [
        "VerifiableCredential",
        "InsuranceCredential"
    ],
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2024-02-13T09:31:40Z",
        "proofValue": "z3acdb2TypHyxciB5AtB7Y4WJQBUVa3r6aZ7bdF2MNGgb3vuM57nSvY1xAkLJFn4C1bZ26qyprG1mNweyrENUeNCx",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f#key-0"
    },
    "issuer": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://holashchand.github.io/test_project/insurance-context.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "issuanceDate": "2024-02-13T09:31:40.464Z",
    "expirationDate": "2033-04-20T20:48:17.684Z",
    "credentialSubject": {
        "id": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f",
        "dob": "1968-10-25",
        "type": "InsuranceCredential",
        "email": "shreeram@gmail.com",
        "gender": "Male",
        "mobile": "0123456789",
        "benefits": [
            "Critical Surgery",
            "Full body checkup"
        ],
        "fullName": "Shreeram Theth",
        "policyName": "Start Insurance Gold Premium",
        "policyNumber": "1234567",
        "policyIssuedOn": "2023-04-20T20:48:17.684Z",
        "policyExpiresOn": "2033-04-20T20:48:17.684Z"
    }
}
describe("Hello World", ()=>{
    it("Hello World", () => {
        console.log("Hello World")
        // expect(add(1, 2)).toEqual(3);
    });
});

describe("Test cases for Verification Service",()=>{
    it("Check if a valid verifiable credential is verified", async ()=>{
        const vcStatus = await verifyCredential(did, VC)
        expect(vcStatus).to.equal(true)
    })
})
