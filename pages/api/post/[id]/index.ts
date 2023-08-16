import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOption } from "../../../../lib/sessionOption";
import { IResponseType } from "../../../../type/type";

async function handler(req: NextApiRequest,
    res: NextApiResponse<IResponseType>) {


    if (req.method === "GET") {
        const {
            query: { id },
            session: { user },
        } = req;
        const post = await db.tweet.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatarUrl: true,
                    },
                },
                _count: {
                    select: {
                        favorite: true,
                        answer: true,
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
