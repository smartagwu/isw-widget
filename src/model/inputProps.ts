import { CSSProperties } from "react";

interface InputProps {
    id: string
    style: CSSProperties
    callback: (data: any) => void
}

export interface ButtonProps extends InputProps {
    text: string
    isLoading: boolean
}

export interface InputFieldProps extends InputProps {
    type: string
    pattern: string
    maxLength: number
    placeHolder: string
    ref: React.MutableRefObject<null>
}