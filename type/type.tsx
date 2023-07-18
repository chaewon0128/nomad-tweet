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
    btnColor?: string,
    textColor?: string,
}

export interface PreviewType {
    register: UseFormRegister<FormValue>,
    avatarPreview: string,

}