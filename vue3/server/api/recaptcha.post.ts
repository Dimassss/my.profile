import axios from 'axios';


export default defineEventHandler(async (event) => {
  const { token } = await readBody<{token: string}>(event)

  const RSC = process.env.RECAPTCHA_SECRET_KEY
  const r = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RSC}&response=${token}`)

  return r.data.success
})