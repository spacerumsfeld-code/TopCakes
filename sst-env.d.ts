/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "Bucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "DatabaseUrl": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ResendApiKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ResendAudienceId": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Server": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "ThirdWebApiKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ThirdWebClientId": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Web": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
