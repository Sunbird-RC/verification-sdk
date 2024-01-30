import * as SampleVCs from "./tests/sample-vcs";
import {init, verifyCredential} from './index';


describe('My test suite', () => {
    beforeAll(async () => {
        await init({
            identityServiceUrl: "http://localhost:3332",
            credentialServiceUrl: "http://localhost:3000"
        });
    });

    test('Test case 1', async () => {
        let response = await verifyCredential(SampleVCs.vc);
        console.log("Response: ", response);
        expect(response.isValid).toBe(true);
    });

    // Other tests...
});
