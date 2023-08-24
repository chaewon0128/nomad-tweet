import { Dispatch, SetStateAction } from "react";
import { FieldErrors, FieldValues, Path, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";


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
    avatar: FileList | undefined,
    user: ProfileType

}

export interface XButtonType {
    page: string,
    position: string,
}

export type MutationReturnType = [(data: any, method?: string) => void, { loading: boolean, data: undefined | any, error: undefined | any }]

export type TweetsType = { tweets: [TweetType] }
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
    liked: number,
    answer: number,
    tweetImage?: string
}

export interface TweetType {
    id: number,
    content: string,
    createdAt: string,
    user: TweetUser,
    tweetImg?: string,
    _count: CountingType
}

export interface CountingType {
    favorite: number,
    answer: number,
}


export interface CommentDataType {
    commentData: AnswerType,
    onDelteAnswer: (deleteaAnswer: AnswerType) => Promise<void>
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
    tweetImg?: FileList,
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
    user: UserType,
    tweetImg?: string,
    _count: CountingType
}
export interface UserType {
    email?: string,
    id?: number,
    name?: string,
    avatarUrl?: string
}

export interface DeleteType {
    onClick: () => Promise<void>,
    size?: string,
}

export interface IResponseType {
    ok: boolean,
    statuse?: number,
    message?: string,
    [key: string]: any,
}

export interface ITweetInput {
    onTweet: ({ Tweet }: TweetForm) => Promise<void>
    handleSubmit: UseFormHandleSubmit<TweetForm, undefined>
    register: UseFormRegister<TweetForm>
    tweetImage: string
    image: FileList | undefined
    setTweetImage: Dispatch<SetStateAction<string>>
}

export interface ITextarea {
    onAnswer: (answerForm: any) => void
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
    register: UseFormRegister<FieldValues>
}