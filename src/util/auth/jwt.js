// Implements jwt functionality
import jwt from 'jsonwebtoken'

// Use a default key for local development when env var is not set
const KEY = process.env.JWT_SECRET_KEY ?? 'dev_secret_key'

export const jwtSign = (payload) => jwt.sign(payload, KEY)

export const jwtVerify = (token) => jwt.verify(token, KEY)