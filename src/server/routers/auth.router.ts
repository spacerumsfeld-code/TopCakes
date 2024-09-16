// import { email } from '@/clients'
// import { zValidator } from '@hono/zod-validator'
// import { Hono } from 'hono'
// import { z } from 'zod'

// const authRouter = new Hono().basePath('/auth')

// const ZPostMagicLink = z.object({
//     email: z.string(),
// })
// export const postMagicLink = authRouter.post(
//     '/magic-link',
//     zValidator('query', ZPostMagicLink, (result, c) => {
//         if (!result.success) {
//             return c.json({
//                 error: {
//                     message: `Validation error`,
//                 },
//                 data: null,
//             })
//         }
//     }),
//     async (c) => {
//         try {
//             const { email: recipientEmail } = c.req.valid('query')

//             console.info('recipientEmail', recipientEmail)

//             await email.send({
//                 email: recipientEmail,
//                 subject: 'Magic Link',
//             })

//             console.info('email sent')
//             return c.json({
//                 data: {
//                     success: true,
//                 },
//                 error: null,
//             })
//         } catch (error) {
//             console.error('error', error)
//             return c.json({
//                 data: null,
//                 error: (error as Error).cause,
//             })
//         }
//     },
// )

// export { authRouter }
