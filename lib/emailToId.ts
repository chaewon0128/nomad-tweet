

export default function emailToId(email: string) {

    const toId = email?.split("@")[0]
    return "@" + toId
}

