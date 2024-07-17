/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: 'top-cakes',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            home: 'aws',
        }
    },
    async run() {
        const DatabaseUrl = new sst.Secret('DatabaseUrl')

        const bucket = new sst.aws.Bucket('Bucket', {
            public: true,
        })

        const hono = new sst.aws.Function('Server', {
            handler: 'src/server/handler.handler',
            link: [DatabaseUrl],
            url: true,
        })

        new sst.aws.Nextjs('Web', {
            link: [bucket, hono, DatabaseUrl],
        })

        return {
            serverUrl: hono.url,
        }
    },
})
