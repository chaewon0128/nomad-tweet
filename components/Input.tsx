import { InputType } from "../type/type";


export default function Input({ title, formName, type, register, errors }: InputType) {
    return (
        <>
            {formName === "name" ?
                <>
                    <label className="sr-only" htmlFor={title}>{title}</label>
                    <input {...register(formName, {
                        required: "필수 입력 항목 입니다"
                    })} id={title} className="h-12 rounded-full  border focus:outline-none pl-5 text-[#4286f4] " placeholder={title} type={type} />
                    <span className="text-red-500 text-xs block">{errors.name?.message}</span>

                </> : null}
            {formName === "email" ?
                <>
                    <label className="sr-only" htmlFor={title}>{title}</label>
                    <input {...register(formName, {
                        required: "필수 입력 항목 입니다",
                        validate: {
                            email: (value) => (value.includes("@") || "이메일 형식으로 작성하세요")
                        }
                    })} id={title} className="h-12 rounded-full  border focus:outline-none pl-5 text-[#4286f4] " placeholder={title} type={type} />
                    <span className="text-red-500 text-xs block">{errors.email?.message}</span></>
                : null}

            {formName === "password" ?
                <>
                    <label className="sr-only" htmlFor={title}>{title}</label>
                    <input {...register(formName, {
                        required: "필수 입력 항목 입니다",
                        minLength: {
                            value: 8,
                            message: "8자리 이상 입력 하세요"
                        }

                    })} id={title} className="h-12 rounded-full border focus:outline-none pl-5 text-[#4286f4] " placeholder={title} type={type} />
                    <span className="text-red-500 text-xs block">{errors.password?.message}</span>
                </>
                :
                null

            }


        </>
    );
}

