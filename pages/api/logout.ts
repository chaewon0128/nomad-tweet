import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOption } from "../../lib/sessionOption";
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
    const { profile } = req.body

    if (req.session.user?.id === profile?.id) {

        req.session.destroy();
        res.json({
            ok: true,
            status: 200,
        })
    }
}





export default withIronSessionApiRoute(handler, sessionOption)