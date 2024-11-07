/// <reference path="../.sst/platform/config.d.ts" />

export const secret = {
    DatabaseUrl: new sst.Secret('DatabaseUrl'),
    ThirdWebClientId: new sst.Secret('ThirdWebClientId'),
    ThirdWebApiKey: new sst.Secret('ThirdWebApiKey'),
    ResendApiKey: new sst.Secret('ResendApiKey'),
    ResendAudienceId: new sst.Secret('ResendAudienceId'),
}

export const allSecrets = Object.values(secret)
