import { SessionOptionType } from "../type/type";

// iron-session options
export const sessionOption: SessionOptionType = {
    cookieName: "tweet",
    password: process.env.NEXT_PUBLIC_AUTH_PW!
}

