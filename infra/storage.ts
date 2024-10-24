/// <reference path="../.sst/platform/config.d.ts" />

export const bucket = new sst.aws.Bucket('Bucket', {
    public: true,
})

export const outputs = {
    bucketName: bucket.name,
}
