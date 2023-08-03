import { Dispatch, SetStateAction } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { KeyedMutator } from "swr";

export interface InputType {
    title: string,
    type: string,
    formName: Path<FormValue>,
    required?: boolean,
    errors?: FieldErrors<FormValue>,
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

export type MutationReturnType = [(data: any, method?: string) => void, { loading: boolean, data: undefined | any, error: undefined | any }]


export type TweetsType = {
    ok: boolean,
    tweets: [TweetType]
}
export interface ProfileType {
    name?: string,
    email?: string,
    avatarUrl?: string,
}

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


export interface CommentDataType {
    commentData: AnswerType,
    mutate: KeyedMutator<any>,
}
export interface AnswerType {
    answer: string,
    createdAt: string,
    user: AnswerUser,
    id: number,
    tweetid: number,
    userId: number,

}
export interface AnswerUser {
    email: string,
    name: string,
    id: number
}

export interface SessionOptionType {
    cookieName: string,
    password: string,
}



export interface ModalType {
    message: string,
    movePage: string,
    setModal: Dispatch<SetStateAction<boolean>>
}

export interface TweetForm {
    Tweet: string,
}

export type likedType = { liked: boolean | undefined }

export interface IconType {
    type: "comment" | "xmark" | "bookmark"
}

export interface DataType {
    isLiked: boolean,
    post: PostType
}
export interface PostType {
    content: string,
    createdAt: string,
    id: number,
    updatedAt: string,
    userId: number
    user: UserType
}
export interface UserType {
    email?: string,
    id?: number,
    name?: string,
}

export interface DeleteType {
    onClick: () => Promise<void>,
    size?: string,
}