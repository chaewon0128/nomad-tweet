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
    email: string;
    password: string,
    avatar?: FileList
}

export interface BtnType {
    title: string,
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
