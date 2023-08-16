import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../../lib/db";
import { sessionOption } from "../../../lib/sessionOption";
import { IResponseType } from "../../../type/type";



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
        const {
            body: { post: { id, userId } },
            session: { user },
        } = req;
        if (req.method !== "DELETE") return;
        if (userId === user?.id) {
            await db?.tweet.delete({
                where: {
                    id: +id.toString(),
                }
            })
            res.json({
                ok: true,
                status: 200,
                message: "트윗이 삭제 되었습니다."
            })
        } else {
            res.json({
                ok: false,
                status: 400,
                message: "본인 트윗만 삭제 가능합니다."
            })
        }
    }
}


export default withIronSessionApiRoute(handler, sessionOption)