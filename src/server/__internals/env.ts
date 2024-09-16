import { Resource } from 'sst'

const secrets = Object.values(Resource).filter((resource) =>
    resource.type.includes('Secret'),
)

type Secrets = typeof secrets

export type Bindings = {
    [K in keyof Secrets]: Secrets[K]['value']
}
