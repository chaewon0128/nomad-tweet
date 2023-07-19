import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../lib/db";
import { sessionOption } from "../../lib/sessionOption";
import { decrypt } from '../../lib/password';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    {
        if (req.method === "POST") {
            const { email, password } = req.body;
            const user = await db.user.findUnique({
                where: {
                    email,
                }
            });
            if (user) {
                const encryptedPassword = decodeURIComponent(user.password);
                const decryptPassword = decrypt(encryptedPassword)

                if (decryptPassword === password) {
                    console.log("성공")
                    req.session.user = {
                        id: user?.id
                    }
                    await req.session.save()
                    res.status(200).end();
                }
            }
        }
        res.status(404).end()
    }


}

export default withIronSessionApiRoute(handler, sessionOption)