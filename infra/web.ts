/// <reference path="../.sst/platform/config.d.ts" />

import { server } from './server'
import { bucket } from './storage'
import { allSecrets } from './secret'

const web = new sst.aws.Nextjs('Web', {
    link: [server, bucket, ...allSecrets],
    domain: {
        name: 'topcak.es',
        redirects: ['www.topcak.es'],
    },
    // warm: 1,
})

export const outputs = {
    webUrl: web.url,
}
