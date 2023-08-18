import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";
import { encrypt } from "../../lib/password";
import { IResponseType } from "../../type/type";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<IResponseType>) {

    if (!(req.method === "POST")) return;

    const { name, email, password } = req.body;
    const encryptPassword = encrypt(password)
    const user = await db.user.findUnique({
        where: {
            email,
        }
    });

    if (!user) {
        await db.user.create({
            data: {
                name,
                email,
                password: encryptPassword,
            }
        })
        return res.json({
            ok: true,
            status: 201,
            message: "회원가입 완료!"
        })
    } else {
        return res.json({
            ok: false,
            status: 400,
            message: "이미 존재하는 아이디 입니다"
        })
    }

}

