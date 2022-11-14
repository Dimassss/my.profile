import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {token} = req.body;

    const r = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`)

    res.status(200)
    if (r.data.success) {
        res.send(true);
    }else{
      res.send(false);
    }
}