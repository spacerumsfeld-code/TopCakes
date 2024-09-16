import jwt from 'jsonwebtoken'

export const generateJWT = (
    payload: Record<string, string | number | boolean>,
    secret: string,
) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d',
    })

    return token
}

export const verifyJWT = (token: string, secret: string) => {
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return null
    }
}
