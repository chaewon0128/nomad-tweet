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
    const { profile } = req.body

    if (req.session.user?.id === profile?.id) {

        req.session.destroy();
        res.json({
            status: 200,
        })

    }


}





export default withIronSessionApiRoute(handler, sessionOption)