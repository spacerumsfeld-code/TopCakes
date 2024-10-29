import { server } from './server'
import { bucket } from './storage'
import { allSecrets } from './secret'

const web = new sst.aws.Nextjs('Web', {
    link: [server, bucket, ...allSecrets],
    domain: {
        name: 'topcak.es',
        redirects: ['www.topcak.es'],
    },
    dev: {
        autostart: true,
        command: 'pnpm run dev',
    },
    // warm: 1,
})

export const outputs = {
    webUrl: web.url,
}
