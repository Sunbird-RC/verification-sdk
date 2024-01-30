import {Verifiable, W3CCredential} from "did-jwt-vc";

export const vc = {
    "id": "did:rcw:ebe1e776-6821-4112-9108-e6e0b4e8bff3",
    "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
    ],
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2024-01-29T11:29:07.017Z",
        "proofValue": "eyJhbGciOiJFUzI1NksifQ.IntcInZjXCI6e1wiQGNvbnRleHRcIjpbXCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MVwiLFwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjFcIl0sXCJ0eXBlXCI6W1wiVmVyaWZpYWJsZUNyZWRlbnRpYWxcIixcIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsXCJdLFwiY3JlZGVudGlhbFN1YmplY3RcIjp7XCJncmFkZVwiOlwiOS4yNVwiLFwicHJvZ3JhbW1lXCI6XCJCLlRlY2hcIixcImNlcnRpZnlpbmdJbnN0aXR1dGVcIjpcIklJSVQgU29uZXBhdFwiLFwiZXZhbHVhdGluZ0luc3RpdHV0ZVwiOlwiTklUIEt1cnVrc2hldHJhXCJ9fSxcIm9wdGlvbnNcIjp7XCJjcmVhdGVkXCI6XCIyMDIwLTA0LTAyVDE4OjQ4OjM2WlwiLFwiY3JlZGVudGlhbFN0YXR1c1wiOntcInR5cGVcIjpcIlJldm9jYXRpb25MaXN0MjAyMFN0YXR1c1wifX0sXCJzdWJcIjpcImRpZDp1cGFpOjkyODg5NmE5LTdhMDUtNDFlMy1iNzg3LTE1MTY4MGYwM2U0ZVwiLFwianRpXCI6XCJkaWQ6cmN3OmViZTFlNzc2LTY4MjEtNDExMi05MTA4LWU2ZTBiNGU4YmZmM1wiLFwibmJmXCI6MTcwNjUyNzc0NixcImV4cFwiOjE3MDk4OTg5ODcsXCJpc3NcIjpcImRpZDp1cGFpOjdiZTcxOGU4LTg2YmYtNDdkOS05Y2FhLTE3MzQ5ZDc0ZmRkN1wifSI.zJ2Lg_1V8xeFZ_nFnO3JY4cMh6iGo-Q0BErJDH_PbvR3tbdxc1Qx25qx4Ch9yEG9iH83swKx0fj_EF-aizjdGA",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:upai:7be718e8-86bf-47d9-9caa-17349d74fdd7"
    },
    "issuer": "did:upai:7be718e8-86bf-47d9-9caa-17349d74fdd7",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "issuanceDate": "2024-01-29T11:29:06.934Z",
    "expirationDate": "2024-03-08T11:56:27.259Z",
    "credentialSubject": {
        "id": "did:upai:928896a9-7a05-41e3-b787-151680f03e4e",
        "grade": "9.25",
        "programme": "B.Tech",
        "certifyingInstitute": "IIIT Sonepat",
        "evaluatingInstitute": "NIT Kurukshetra"
    }
} as unknown as Verifiable<W3CCredential>;
