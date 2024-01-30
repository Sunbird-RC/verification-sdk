import {VerificationConfiguration} from "./types/VerificationConfiguration";
import {VerificationOptions} from "./types/VerificationOptions";
import {Verifiable, W3CCredential} from "did-jwt-vc";

export let OPTIONS: VerificationOptions = {
    ignoreVcExpiry: false,
    validIssuers: []
};

export let CONFIG: VerificationConfiguration = {
    credentialServiceUrl: "",
    identityServiceUrl: ""
};

export let REVOKED_CREDENTIALS: Verifiable<W3CCredential>[] = [];

export const saveConfigurationAndOptions = (config: VerificationConfiguration, options: VerificationOptions) => {
    CONFIG = config;
    OPTIONS = options;
}

export const storeRevokedCredentials = (revokedCredentials: Verifiable<W3CCredential>[]) => {
    REVOKED_CREDENTIALS = revokedCredentials;
}
