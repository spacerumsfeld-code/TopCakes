/// <reference path="../.sst/platform/config.d.ts" />

export const secret = {
    DatabaseUrl: new sst.Secret('DatabaseUrl'),
    ThirdWebClientId: new sst.Secret('ThirdWebClientId'),
    ThirdWebApiKey: new sst.Secret('ThirdWebApiKey'),
}

export const allSecrets = Object.values(secret)
