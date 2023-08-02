import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../lib/db";
import { sessionOption } from "../../lib/sessionOption";
import { encrypt } from "../../lib/password";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number
        }
    }
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    {
        if (req.method === "GET") {
            const {
                session: { user }
            } = req;
            if (!user?.id) {
                return res.status(401).end();
            }
            const profile = await db.user.findUnique({
                where: {
                    id: user.id
                }
            });
            res.json({ ok: true, profile })
        }

    }
    if (req.method === "POST") {
        const { email, name, password } = req.body
        const encryptPassword = encrypt(password)
        if (password) {
            await db.user.update({
                where: {
                    email,
                },
                data: {
                    name,
                    password: encryptPassword,
                }
            })
        } else if (password === "") {
            await db.user.update({
                where: {
                    email,
                },
                data: {
                    name,
                }
            })
        }

        res.end()
    }

}

export default withIronSessionApiRoute(handler, sessionOption)