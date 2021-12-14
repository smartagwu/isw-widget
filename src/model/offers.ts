interface Provider {
    id: number
    logo:string
    name: string
    code: string
    domainCode: string
    description: string
}

export default interface OffersType {
    offerId: string,
    amountOffered: number
    interest: number
    amountPayable: number
    tenure: number
    currency: string
    terms: string
    provider: Provider
}