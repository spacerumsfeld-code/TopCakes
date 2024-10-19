import { secret } from './secret'

export const server = new sst.aws.Function('Server', {
    handler: 'src/server/index.handler',
    link: [secret.DatabaseUrl, secret.ThirdWebApiKey],
    url: true,
})

export const outputs = {
    server: server.url,
}
