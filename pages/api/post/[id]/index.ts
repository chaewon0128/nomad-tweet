import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOption } from "../../../../lib/sessionOption";



async function handler(req: NextApiRequest,
    res: NextApiResponse<ResponseType>) {


    if (req.method === "GET") {
        const {
            query: { id },
            session: { user },
        } = req;
        const post = await db.tweet.findUnique({
            where: {
                id: +id,
            },
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
            post
        })

    }
    res.status(404).end();
}


export default withIronSessionApiRoute(handler, sessionOption)
