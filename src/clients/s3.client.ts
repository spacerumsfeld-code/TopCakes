import crypto from 'crypto'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { Resource } from 'sst'

const client = new S3Client({})

const getPresignedUrl = async () => {
    const command = new PutObjectCommand({
        Key: crypto.randomUUID(),
        Bucket: Resource.Bucket.name,
    })

    const presignedUrl = await getSignedUrl(client, command, {
        expiresIn: 60,
    })

    return presignedUrl
}

const s3Client = {
    getPresignedUrl,
}

export { s3Client }
