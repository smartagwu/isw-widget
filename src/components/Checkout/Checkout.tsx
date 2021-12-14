
import { useState } from "react";
import Complete from "./Complete";
import Offers from "../../model/offers";
import ValidateOtp from "./ValidateOtp";
import CreditMethod from "./CreditMethod";
import OfferOptionsCard from "../shared/OptionsCard/OffersOptionsCard";

export default function Checkout(props: { offer:Offers, closeWidget:(type:string)=>void }) {
    const [ validateOtpMessage, updateMessage ] = useState("");
    const [ currentPage, setCurrentPage ] = useState("loading");

    function validateOtp(message:string) {
        updateMessage(message);
        setCurrentPage("validate-otp");
    }

    return <div>
        <OfferOptionsCard offers={props.offer} style={{background: "#ffffff"}} />
        { 
            currentPage === "validate-otp" ? <ValidateOtp offers={props.offer} message={validateOtpMessage} onSuccessful={()=> setCurrentPage("complete")} /> :
            currentPage === "complete" ? <Complete close={props.closeWidget}/> :
            <CreditMethod validateOtp={(message)=> validateOtp(message)}/>
        }
    </div>
}

Checkout.defaultProps = {
    offer: {}
}