import { secret } from './secret'
import { bucket } from './storage'

export const server = new sst.aws.Function('Server', {
    handler: 'src/server/index.handler',
    link: [
        secret.DatabaseUrl,
        secret.ThirdWebApiKey,
        secret.ThirdWebClientId,
        bucket,
    ],
    url: true,
})

export const outputs = {
    server: server.url,
}
