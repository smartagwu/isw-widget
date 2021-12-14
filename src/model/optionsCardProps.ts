import { CSSProperties } from "react";
import OffersType from "./offers";

export interface OptionsCardProps {
    icon: string
    content: any
    iconWidth: string
    iconHeight: string
    style: CSSProperties
    callback: (data: any) => void
}

export interface OffersOptionsCardProps {
    offers: OffersType
    style: CSSProperties
    callback: (offers: OffersType) => void
}