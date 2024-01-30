import * as SampleVCs from "./tests/sample-vcs";
import {init, verifyCredential} from './index';
import {VerificationOptions} from "./types/VerificationOptions";


describe('My test suite', () => {
    beforeAll(async () => {
        await init({
            identityServiceUrl: "http://localhost:3332",
            credentialServiceUrl: "http://localhost:3000"
        });
    });

    test('Test VALID VC', async () => {
        let response = await verifyCredential(SampleVCs.VALID_VC);
        expect(response.isValid).toBe(true);
        expect(response.message).toBe("OK");
    });

    test('Test INVALID VC SIGNATURE', async () => {
        let response = await verifyCredential(SampleVCs.VC_WITH_INVALID_SIGNATURE);
        expect(response.isValid).toBe(false);
        expect(response.message).toBe("Invalid VC Signature");
    });

    test('TEST ISSUER NOT FOUND', async () => {
        let response = await verifyCredential(SampleVCs.VC_WITH_INVALID_SIGNATURE);
        expect(response.isValid).toBe(false);
        expect(response.message).toBe("Invalid VC Signature");
    });
});

describe('My test suite', () => {
    beforeAll(async () => {
        await init({
            identityServiceUrl: "http://localhost:3332",
            credentialServiceUrl: "http://localhost:3000"
        }, {
            validIssuers: ["did:issuer2:7ef4c017-7b8c-4ee2-9b3f-a5745c97dc61"]
        } as VerificationOptions);
    });

    test('TEST INVALID ISSUER', async () => {
        let response = await verifyCredential(SampleVCs.VALID_VC);
        expect(response.isValid).toBe(false);
        expect(response.message).toBe("Invalid issuer");
    });
});
