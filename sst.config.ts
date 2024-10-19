/// <reference path="./.sst/platform/config.d.ts" />

// @TODO: Vector DB (via sst and AWS) for cake similarity searches
// @TODO: Event bus for full event-driven architecture
// @TODO: Lets trawl the sst docs to see what else we could potentially use.

import { readdirSync } from 'fs'

export default $config({
    app(input) {
        return {
            name: 'top-cakes',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            home: 'aws',
        }
    },
    async run() {
        const outputs = {}

        for (const value of readdirSync('./infra/')) {
            const result = await import('./infra/' + value)
            if (result.outputs) Object.assign(outputs, result.outputs)
        }

        return outputs
    },
})
