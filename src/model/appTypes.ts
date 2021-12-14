export type LoanOptionType = "request-loan" | "repay-loan";
export type RepaymentOptionType = "debit-card" | "account";
export type CheckoutTypes = "credit-method" | "validate-otp" | "complete";
export type PageType = "loading" | "signup" | "login" | "loan-options" | "offers" | "repayment-options" | "checkout";
export interface IframeMessage {
    type: string
    payload: any
}