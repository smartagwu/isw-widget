export default interface WidgetOptions {
    token: string,
    email: string,
    customerId: string,
    firstName: string,
    lastName: string,
    countryCode: string,
    onClose: () => void,
    onFailed: (error:string) => void,
    onSuccessful: () => void
}