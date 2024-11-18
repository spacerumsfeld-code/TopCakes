import { server } from './server'
import { bucket } from './storage'
import { allSecrets } from './secret'
import { type NextjsArgs } from '../.sst/platform/src/components/aws'

const webConfig: NextjsArgs = {
    link: [server, bucket, ...allSecrets],
    dev: {
        autostart: true,
        command: 'pnpm run dev',
    },
}

if (process.env.PULUMI_NODEJS_STACK === 'production') {
    webConfig.domain = {
        name: 'topcak.es',
        redirects: ['www.topcak.es'],
    }
}

const web = new sst.aws.Nextjs('Web', webConfig)

export const outputs = {
    webUrl: web.url,
}
