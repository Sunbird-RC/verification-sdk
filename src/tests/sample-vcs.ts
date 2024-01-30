import {Verifiable, W3CCredential} from "did-jwt-vc";

export const VALID_VC = {
    "id": "did:rcw:8223ad9a-f1ad-47a2-b17e-9356da943d02",
    "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
    ],
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2024-01-30T04:35:56.620Z",
        "proofValue": "eyJhbGciOiJFUzI1NksifQ.IntcInZjXCI6e1wiQGNvbnRleHRcIjpbXCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MVwiLFwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjFcIl0sXCJ0eXBlXCI6W1wiVmVyaWZpYWJsZUNyZWRlbnRpYWxcIixcIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsXCJdLFwiY3JlZGVudGlhbFN1YmplY3RcIjp7XCJncmFkZVwiOlwiOS4yNVwiLFwicHJvZ3JhbW1lXCI6XCJCLlRlY2hcIixcImNlcnRpZnlpbmdJbnN0aXR1dGVcIjpcIklJSVQgU29uZXBhdFwiLFwiZXZhbHVhdGluZ0luc3RpdHV0ZVwiOlwiTklUIEt1cnVrc2hldHJhXCJ9fSxcIm9wdGlvbnNcIjp7XCJjcmVhdGVkXCI6XCIyMDIwLTA0LTAyVDE4OjQ4OjM2WlwiLFwiY3JlZGVudGlhbFN0YXR1c1wiOntcInR5cGVcIjpcIlJldm9jYXRpb25MaXN0MjAyMFN0YXR1c1wifX0sXCJzdWJcIjpcImRpZDp1cGFpOjkyODg5NmE5LTdhMDUtNDFlMy1iNzg3LTE1MTY4MGYwM2U0ZVwiLFwianRpXCI6XCJkaWQ6cmN3OjgyMjNhZDlhLWYxYWQtNDdhMi1iMTdlLTkzNTZkYTk0M2QwMlwiLFwibmJmXCI6MTcwNjU4OTM1NixcImV4cFwiOjE3MDk4OTg5ODcsXCJpc3NcIjpcImRpZDppc3N1ZXIxOmE2ZGRkMmVkLTcxNTEtNDRiMy1hOGU2LTdmY2QwYjBkZDg4OVwifSI.tyMr0fIt3_zexZRaSDwgTGwFo8vTBFIJe8LIzfM54qtMufG6Igjt0IL_3IhkTnwwPsIuVfXwKSJNShaY_JIZWQ",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:issuer1:a6ddd2ed-7151-44b3-a8e6-7fcd0b0dd889"
    },
    "issuer": "did:issuer1:a6ddd2ed-7151-44b3-a8e6-7fcd0b0dd889",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "issuanceDate": "2024-01-30T04:35:56.524Z",
    "expirationDate": "2024-03-08T11:56:27.259Z",
    "credentialSubject": {
        "id": "did:upai:928896a9-7a05-41e3-b787-151680f03e4e",
        "grade": "9.25",
        "programme": "B.Tech",
        "certifyingInstitute": "IIIT Sonepat",
        "evaluatingInstitute": "NIT Kurukshetra"
    }
} as unknown as Verifiable<W3CCredential>;

export const VC_WITH_INVALID_SIGNATURE = {
    "id": "did:rcw:8223ad9a-f1ad-47a2-b17e-9356da943d02",
    "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
    ],
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2024-01-30T04:35:56.620Z",
        "proofValue": "eyJhbGciOiJFUzI1NksifQ.IntcInZjXCI6e1wiQGNvbnRleHRcIjpbXCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MVwiLFwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjFcIl0sXCJ0eXBlXCI6W1wiVmVyaWZpYWJsZUNyZWRlbnRpYWxcIixcIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsXCJdLFwiY3JlZGVudGlhbFN1YmplY3RcIjp7XCJncmFkZVwiOlwiOS4yNVwiLFwicHJvZ3JhbW1lXCI6XCJCLlRlY2hcIixcImNlcnRpZnlpbmdJbnN0aXR1dGVcIjpcIklJSVQgU29uZXBhdFwiLFwiZXZhbHVhdGluZ0luc3RpdHV0ZVwiOlwiTklUIEt1cnVrc2hldHJhXCJ9fSxcIm9wdGlvbnNcIjp7XCJjcmVhdGVkXCI6XCIyMDIwLTA0LTAyVDE4OjQ4OjM2WlwiLFwiY3JlZGVudGlhbFN0YXR1c1wiOntcInR5cGVcIjpcIlJldm9jYXRpb25MaXN0MjAyMFN0YXR1c1wifX0sXCJzdWJcIjpcImRpZDp1cGFpOjkyODg5NmE5LTdhMDUtNDFlMy1iNzg3LTE1MTY4MGYwM2U0ZVwiLFwianRpXCI6XCJkaWQ6cmN3OjgyMjNhZDlhLWYxYWQtNDdhMi1iMTdlLTkzNTZkYTk0M2QwMlwiLFwibmJmXCI6MTcwNjU4OTM1NixcImV4cFwiOjE3MDk4OTg5ODcsXCJpc3NcIjpcImRpZDppc3N1ZXIxOmE2ZGRkMmVkLTcxNTEtNDRiMy1hOGU2LTdmY2QwYjBkZDg4OVwifSI.tyMr0fIt3_zexZRaSDwgTGwFo8vTBFIJe8LIzfM54qtMufG6Igjt0IL_3IhkTnwwPsIuVfXwKSJNShaY_JIZWQ",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:issuer1:a6ddd2ed-7151-44b3-a8e6-7fcd0b0dd889"
    },
    "issuer": "did:issuer2:7ef4c017-7b8c-4ee2-9b3f-a5745c97dc61",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "issuanceDate": "2024-01-30T04:35:56.524Z",
    "expirationDate": "2024-03-08T11:56:27.259Z",
    "credentialSubject": {
        "id": "did:upai:928896a9-7a05-41e3-b787-151680f03e4e",
        "grade": "9.25",
        "programme": "B.Tech",
        "certifyingInstitute": "IIIT Sonepat",
        "evaluatingInstitute": "NIT Kurukshetra"
    }
} as unknown as Verifiable<W3CCredential>;

export const VC_ISSUER_NOT_FOUND = {
    "id": "did:rcw:8223ad9a-f1ad-47a2-b17e-9356da943d02",
    "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
    ],
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2024-01-30T04:35:56.620Z",
        "proofValue": "eyJhbGciOiJFUzI1NksifQ.IntcInZjXCI6e1wiQGNvbnRleHRcIjpbXCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MVwiLFwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjFcIl0sXCJ0eXBlXCI6W1wiVmVyaWZpYWJsZUNyZWRlbnRpYWxcIixcIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsXCJdLFwiY3JlZGVudGlhbFN1YmplY3RcIjp7XCJncmFkZVwiOlwiOS4yNVwiLFwicHJvZ3JhbW1lXCI6XCJCLlRlY2hcIixcImNlcnRpZnlpbmdJbnN0aXR1dGVcIjpcIklJSVQgU29uZXBhdFwiLFwiZXZhbHVhdGluZ0luc3RpdHV0ZVwiOlwiTklUIEt1cnVrc2hldHJhXCJ9fSxcIm9wdGlvbnNcIjp7XCJjcmVhdGVkXCI6XCIyMDIwLTA0LTAyVDE4OjQ4OjM2WlwiLFwiY3JlZGVudGlhbFN0YXR1c1wiOntcInR5cGVcIjpcIlJldm9jYXRpb25MaXN0MjAyMFN0YXR1c1wifX0sXCJzdWJcIjpcImRpZDp1cGFpOjkyODg5NmE5LTdhMDUtNDFlMy1iNzg3LTE1MTY4MGYwM2U0ZVwiLFwianRpXCI6XCJkaWQ6cmN3OjgyMjNhZDlhLWYxYWQtNDdhMi1iMTdlLTkzNTZkYTk0M2QwMlwiLFwibmJmXCI6MTcwNjU4OTM1NixcImV4cFwiOjE3MDk4OTg5ODcsXCJpc3NcIjpcImRpZDppc3N1ZXIxOmE2ZGRkMmVkLTcxNTEtNDRiMy1hOGU2LTdmY2QwYjBkZDg4OVwifSI.tyMr0fIt3_zexZRaSDwgTGwFo8vTBFIJe8LIzfM54qtMufG6Igjt0IL_3IhkTnwwPsIuVfXwKSJNShaY_JIZWQ",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:issuer1:a6ddd2ed-7151-44b3-a8e6-7fcd0b0dd889"
    },
    "issuer": "did:issuer1:a6ddd2ed-7151-44b3-a8e6-7fcd0b0dd889",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "issuanceDate": "2024-01-30T04:35:56.524Z",
    "expirationDate": "2024-03-08T11:56:27.259Z",
    "credentialSubject": {
        "id": "did:upai:928896a9-7a05-41e3-b787-151680f03e4e",
        "grade": "9.25",
        "programme": "B.Tech",
        "certifyingInstitute": "IIIT Sonepat",
        "evaluatingInstitute": "NIT Kurukshetra"
    }
} as unknown as Verifiable<W3CCredential>;
