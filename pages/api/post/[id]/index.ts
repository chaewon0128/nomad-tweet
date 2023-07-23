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

        const isLiked = Boolean(
            await db.favorite.findFirst({
                where: {
                    tweetid: post?.id,
                    userId: user?.id
                },
                select: {
                    id: true
                }
            })
        )

        res.json({
            ok: true,
            post,
            isLiked
        })

    }
    res.status(404).end();
}


export default withIronSessionApiRoute(handler, sessionOption)
