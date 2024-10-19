export const secret = {
    DatabaseUrl: new sst.Secret('DatabaseUrl'),
    ThirdWebApiKey: new sst.Secret('ThirdWebApiKey'),
}

export const allSecrets = Object.values(secret)
