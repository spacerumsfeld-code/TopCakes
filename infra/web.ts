import { server } from './server'
import { bucket } from './storage'
import { allSecrets } from './secret'

const web = new sst.aws.Nextjs('Web', {
    link: [server, bucket, ...allSecrets],
})

export const outputs = {
    webUrl: web.url,
}
