import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOption } from "../../../../lib/sessionOption";
import { IResponseType } from "../../../../type/type";



async function handler(req: NextApiRequest,
    res: NextApiResponse<IResponseType>) {


    if (req.method === "POST") {
        const {
            query: { id },
            session: { user },
        } = req;
        const alreadyExists = await db.favorite.findFirst({
            where: {
                tweetid: +id.toString(),
                userId: user?.id,
            },
        })

        if (alreadyExists) {
            await db.favorite.delete({
                where: {
                    id: alreadyExists.id
                }
            })
        } else {
            await db.favorite.create({
                data: {
                    user: {
                        connect: {
                            id: user?.id
                        },
                    },
                    tweet: {
                        connect: {
                            id: +id.toString()
                        }
                    }
                }
            })
        }


        res.json({
            ok: true,
        })

    }
    res.status(404).end();
}


export default withIronSessionApiRoute(handler, sessionOption)
