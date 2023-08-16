import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../lib/db";
import { sessionOption } from "../../lib/sessionOption";
import { decrypt } from '../../lib/password';
import { IResponseType } from "../../type/type";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number
        }
    }
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    {
        if (req.method === "POST") {
            const { email, password } = req.body;
            const user = await db.user.findUnique({
                where: {
                    email,
                }
            });
            if (!user) {
                res.json({
                    ok: false,
                    status: 404,
                    message: "존재하지 않는 아이디 입니다"
                })
            } else {
                const encryptedPassword = decodeURIComponent(user.password);
                const decryptPassword = decrypt(encryptedPassword)

                if (decryptPassword === password) {
                    req.session.user = {
                        id: user?.id
                    }
                    await req.session.save()
                    res.json({
                        ok: true,
                        status: 200
                    })
                } else {
                    res.json({
                        ok: false,
                        status: 401,
                        message: "비밀번호를 확인 하세요"
                    })
                }
            }
        }
    }

}




export default withIronSessionApiRoute(handler, sessionOption)