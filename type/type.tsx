import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

export interface InputType {
    title: string,
    type: string,
    formName: Path<FormValue>;
    errors: FieldErrors<FormValue>;
    register: UseFormRegister<FormValue>

}

export interface FormValue {
    name: string,
    email: string,
    password: string,
    avatar?: FileList
}

export interface BtnType {
    title: string,
    loading?: boolean,
}

export interface PreviewType {
    register: UseFormRegister<FormValue>,
    avatarPreview: string,

}

export interface XButtonType {
    page: string,
    position: string,
}

export type MutationReturnType = [(data: any) => void, { loading: boolean, data: undefined | any, error: undefined | any }]


export type TweetsType = {
    ok: boolean,
    tweets: [TweetType]
}
export interface ProfileType {
    name: string,
    email: string,
    avatarUrl?: string,
}


// export interface TweetType {
//     index: number,
//     content: string,
//     createdAt: string,
//     id: number,
//     liked: boolean,
//     user: TweetUser
//     date: string,
//     name: string,
//     email: string
//     profile: ProfileType
// }
export interface TweetUser {
    name: string,
    email: string
    id: number
}

export interface TweetMsgType {
    index: number,
    profile: ProfileType
    content: string,
    date: string,
    liked: boolean,
    name: string,
    email: string

}

export interface TweetType {
    id: number,
    content: string,
    createdAt: string,
    liked: boolean,
    user: TweetUser

}
