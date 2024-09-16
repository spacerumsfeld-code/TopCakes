// import { Resource } from 'sst'
// import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
// import { MagicLinkEmail } from './emails/MagicLink.email'
// import { render } from '@react-email/components'
// import { generateJWT } from '@/_utils'

// const client = new SESv2Client()

// export const send = async ({
//     email,
//     subject,
// }: {
//     email: string
//     subject: string
// }) => {
//     try {
//         const jwt = generateJWT({ email }, process.env.JWT_SECRET!)
//         const magicLink = `${process.env.NEXT_PUBLIC_WEB_URL}?token=${jwt}`

//         const MagicLinkEmailHtml = render(
//             <MagicLinkEmail magicLink={magicLink} />,
//         )

//         await client.send(
//             new SendEmailCommand({
//                 FromEmailAddress: Resource.Email.sender,
//                 Destination: {
//                     ToAddresses: [Resource.Email.sender],
//                 },
//                 Content: {
//                     Simple: {
//                         Subject: {
//                             Charset: 'UTF-8',
//                             Data: subject,
//                         },
//                         Body: {
//                             Html: {
//                                 Charset: 'UTF-8',
//                                 Data: MagicLinkEmailHtml,
//                             },
//                         },
//                     },
//                 },
//             }),
//         )
//     } catch (error) {
//         console.error(`EmailClient: send error`, error)
//     }
// }

// export const email = { send }
