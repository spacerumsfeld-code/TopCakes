import { Resend } from 'resend'
import { Resource } from 'sst'

const client = new Resend(Resource.ResendApiKey.value)

const addEmailToMailingList = async (
    addToMailingListArgs: Readonly<{ email: string }>,
) => {
    const { email } = addToMailingListArgs

    await client.contacts.create({
        email,
        unsubscribed: false,
        audienceId: Resource.ResendAudienceId.value!,
    })
}

const emailClient = {
    addEmailToMailingList,
}

export { emailClient }
