import { useState } from "react";
import Otp from "../shared/Otp/Otp";
import Button from "../shared/Button";
import OffersType from "../../model/offers";
import Request from "../../requests/request";
import { VALIDATE_OTP, ACCEPT_OFFER } from "../../requests/endpoints";

export default function ValidateOtp(props: { offers:OffersType, message:string, onSuccessful:()=> void}) {
    const [isLoading, setLoader ] = useState(false);
    const [ otp, updateOtp ] = useState([]);

    async function validateOtp(){
        if(otp.length < 4) {
            alert("Kindly enter the OTP sent to your phone number");
            return;
        }
        
        setLoader(true);
        try {
            let response = await Request().get(VALIDATE_OTP);
            if(response.responseCode === "00") acceptOffer();
            else {
                setLoader(false);
                alert(response.responseMessage);
            }
        } catch {
            setLoader(false);
            alert("Failed to valide OTP, please try again");
        }
    }

    async function acceptOffer() {
        try {
            let response = await Request().post(ACCEPT_OFFER, props.offers);
            if(response.responseCode === "00") props.onSuccessful();
            else alert(response.responseMessage);
        } catch {
            alert("Failed to valide OTP, please try again");
        }
        setLoader(false);
    }

    return <>
        <div style={{marginTop: "30px"}} >
            <p style={{fontSize: "12px", color: "rgba(0, 0, 0, 0.7)"}}>{"Kindly enter OTP sent to 080*****234"}</p>
            <Otp updateOtp={(otp:any) => updateOtp(otp)}/>
        </div>
        <Button id="signup-btn" text="Continue" isLoading={isLoading} style={{marginTop: "30px"}} callback={validateOtp} />
    </>
}