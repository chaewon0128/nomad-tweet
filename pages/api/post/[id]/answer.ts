import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { sessionOption } from "../../../../lib/sessionOption";
import { withIronSessionApiRoute } from "iron-session/next";


async function handler(req: NextApiRequest,
    res: NextApiResponse<ResponseType>) {
    if (req.method === "GET") {
        const { query: { id } } = req
        const tweets = await db.answer.findMany({
            where: {
                tweetid: +id
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
            },
            take: 32000,
        })
        res.json({
            ok: true,
            tweets,
        })
    }
    if (req.method === "POST") {
        const { body: { answer }, session: { user }, query: { id } } = req

        const comment = await db.answer.create({
            data: {
                answer,
                user: {
                    connect: {
                        id: user?.id
                    }
                },
                tweet: {
                    connect: {
                        id: +id,
                    }
                }
            }
        })

        res.json({
            status: 201,
            comment,
        })

    }
    return res.status(401).end()
}

export default withIronSessionApiRoute(handler, sessionOption)