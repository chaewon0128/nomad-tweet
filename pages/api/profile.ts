import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../lib/db";
import { sessionOption } from "../../lib/sessionOption";

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
            const profile = await db.user.findUnique({
                where: {
                    id: req.session.user?.id
                }
            });
            res.json({ ok: true, profile })
        }


    }


}

export default withIronSessionApiRoute(handler, sessionOption)