import {VerificationConfiguration} from "./types/VerificationConfiguration";
import {VerificationOptions} from "./types/VerificationOptions";
import {verifyCredential, getRevokedCredentialsList} from "./verification-utils";
import {saveConfigurationAndOptions} from "./config";

const init = async (config: VerificationConfiguration, options?: VerificationOptions): Promise<void> => {
    // store configuration and options
    saveConfigurationAndOptions(config, options);
    // download revoked credentials list
    await getRevokedCredentialsList();
}

export {init, verifyCredential, getRevokedCredentialsList};
