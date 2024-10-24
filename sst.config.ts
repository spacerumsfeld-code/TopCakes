// / <reference path="./.sst/platform/config.d.ts" />

// @TODO: event-driven architecture with event bus publishing events for each router procedure.
// @TODO: Vector DB (via sst and AWS) for cake similarity searches
// @TODO: do a check of all resources to re-use (or not) for TEST stage, which code to test is deployed to in CICD.
// (re-use bucket, re-use secrets I think, which means re-using dev database. maybe we have seperate branch
// of DB created within CICD that we then give the schema of the current code -- how else would we do full test
// of code with schema changes given due consideration?
// production versions of DB, api keys, etc.

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
