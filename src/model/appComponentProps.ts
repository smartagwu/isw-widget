import OffersType from "./offers";
import { PageType } from "./appTypes";
import { LoanOptionType } from "./appTypes";
import { RepaymentOptionType } from "./appTypes";

export default interface appComponentProps {
    offer: OffersType
    currentPage: string
    offers: Array<OffersType>,
    closeWidget: (type:string) => void
    setCurrentPage: (type:PageType) => void
    onLoanOptionSelected: (type:LoanOptionType) => void
    onOffersOptionSelected: (offer:OffersType) => void
    onRepaymentOptionSelected: (type:RepaymentOptionType) => void
}