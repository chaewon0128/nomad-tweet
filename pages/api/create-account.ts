import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";
import { encrypt } from "../../lib/password";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<ResponseType>) {

    if (req.method === "POST") {
        const { name, email, password, avatar } = req.body;
        const encryptPassword = encrypt(password)

        const user = await db.user.findUnique({
            where: {
                email,
            }
        })
        if (user) {
            return res.status(400).json({
                message: "이미 존재하는 아이디 입니다"
            })
        } else {
            await db.user.create({
                data: {
                    name,
                    email,
                    password: encryptPassword,

                }
            })
            return res.status(201).json({
                ok: true,
            })
        }


    }
    return res.status(401).end()
}

