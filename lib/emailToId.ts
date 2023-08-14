

export default function emailToId(email: string | undefined) {

    const toId = email?.split("@")[0]
    return "@" + toId
}

