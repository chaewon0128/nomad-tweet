import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../../lib/db";
import { sessionOption } from "../../../lib/sessionOption";

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
            const tweets = await db.tweet.findMany({
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            })
            res.json({
                ok: true,
                tweets,
            })
        }
        if (req.method === "POST") {
            const { body: { Tweet }, session: { user } } = req
            const post = await db.tweet.create({
                data: {
                    content: Tweet,
                    liked: false,
                    user: {
                        connect: {
                            id: user?.id
                        }
                    }
                }
            })
            return res.json({
                ok: true,
                post,
            })
        }
    }
}




export default withIronSessionApiRoute(handler, sessionOption)