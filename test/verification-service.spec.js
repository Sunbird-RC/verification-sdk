import {expect} from 'chai';
import { verifyCredential } from '../lib/index.js';

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

// This revocationList has the VC mentioned above 
const revocationList1 = [
    {
        "id": "did:cbse:3ed88495-5c37-49da-9b4d-a12eebefd893",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:web:Sreejit-K.github.io:VCTest:d105c3c4-4f7c-4c15-9525-35efd3208672",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    },
    {
        "id": "did:cbse:57f88940-5c47-412b-a311-bb48ce3fa692",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:web:Sreejit-K.github.io:VCTest:d105c3c4-4f7c-4c15-9525-35efd3208672",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    },
    {
        "id": "did:rcw:164f4b00-0141-40ef-b34a-5b9e1d5dfeca",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:abc:d1e50903-c0ee-42b2-abdf-74f68365759f",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    }
];

// This revocationList doesnt include the VC mentioned above 
const revocationList2 = [
    {
        "id": "did:cbse:3ed88495-5c37-49da-9b4d-a12eebefd893",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:web:Sreejit-K.github.io:VCTest:d105c3c4-4f7c-4c15-9525-35efd3208672",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    },
    {
        "id": "did:cbse:57f88940-5c47-412b-a311-bb48ce3fa692",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:web:Sreejit-K.github.io:VCTest:d105c3c4-4f7c-4c15-9525-35efd3208672",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    },
    {
        "id": "did:cbse:70ec2703-5e37-4390-8a20-3b1b2bb06888",
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "issuer": "did:hcm:da70f38a-fcb7-4ad2-9861-fa898d778bb8",
        "issuanceDate": "2023-02-06T11:56:27.259Z"
    }
]

describe("Hello World", ()=>{
    it("Hello World", () => {
        console.log("Hello World")
        // expect(add(1, 2)).toEqual(3);
    });
});

describe("Test cases for VC with no revocation list",()=>{
    it("Check if a valid verifiable credential is verified", async ()=>{
        const vcStatus = await verifyCredential(did, VC)
        expect(vcStatus?.status).to.equal('OK')
    })
})

describe("Test cases for VC with empty revocation list",()=>{
    it("Check if a valid verifiable credential is verified", async ()=>{
        const vcStatus = await verifyCredential(did, VC,[]);
        expect(vcStatus?.status).to.equal('OK')
    })
})

describe("Test cases for verify a VC, which is in revocation list",()=>{
    it("Check if a valid verifiable credential is verified", async ()=>{
        const vcStatus = await verifyCredential(did, VC,revocationList1);
        expect(vcStatus?.status).to.equal("NOK")
        expect(vcStatus?.checks[0].revoked).to.equal("NOK");
    })
})


describe("Test cases for verify a VC, which is not in the revocation list",()=>{
    it("Check if a valid verifiable credential is verified", async ()=>{
        const vcStatus = await verifyCredential(did, VC,revocationList2);
        expect(vcStatus?.status).to.equal("OK")
        expect(vcStatus?.checks[0].revoked).to.equal("OK");
    })
})
