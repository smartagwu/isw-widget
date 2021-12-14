import "../Auth/auth.css";
import "../shared/input.css";
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import Animation from "../../utils/animation";
import { SEND_OTP } from "../../requests/endpoints";
import InputField from "../shared/InputField";import Request from "../../requests/request";

export default function CreditMethod(props: { validateOtp:(message:string)=>void}) {
    const style = { marginBottom: "10px" }
    const [isLoading, setLoader ] = useState(false);

    function validateInput() {
        const cardNumber = (document.getElementById("card-number") as HTMLInputElement).value;
        const expiry = (document.getElementById("expiry") as HTMLInputElement).value;
        const cvv = (document.getElementById("cvv") as HTMLInputElement).value;
        const pin = (document.getElementById("pin") as HTMLInputElement).value;

        var arr = [
            { value: cardNumber, name: "card number" }, 
            { value: expiry, name: "card expiry" }, 
            { value: cvv, name: "card cvv" }, 
            { value: pin, name: "card pin" }
        ];

        for(let i=0; i<arr.length; i++){
            if(!arr[i].value){
                alert("Kindly enter your "+ arr[i].name);
                return;
            }
        }

        sendOTP();
    }

    async function sendOTP() {
        setLoader(true);
        try {
            let response = await Request().get(SEND_OTP);
            if(response.responseCode === "T0") validateOtp(response.responseMessage);
            else alert(response.responseMessage);
        } catch {
            alert("Failed to generate OTP, please try again");
        }
        setLoader(false);
    }

    function validateOtp(message:string) {
        Animation().slideOutPage("credit-method-parent", () => props.validateOtp(message));
    }

    useEffect(() => {
        document.getElementById("card-number")?.focus();
    });

    return <form id="credit-method-parent" className="App-parent" onSubmit={(e) => e.preventDefault()}>
        <ul className="form-grid" style={{marginTop: "20px"}}>
            <li key="card-number"> <InputField type="number" placeHolder="Card Number" id="card-number" style={style} /> </li>
            <li key="expiry"> <InputField type="text" placeHolder="Expiry (MM/YY)" id="expiry" style={style} /> </li>
            <li key="cvv"> <InputField type="number" placeHolder="CVV" id="cvv" style={style} /> </li>
            <li key="pin"> <InputField type="password" placeHolder="PIN" id="pin" style={style} /> </li>
        </ul>

        <div style={{marginTop: "20px"}}>
            <div className="checkbox"><input type="checkbox" name="Terms and conditions" id="terms" /> Accept Interswitch’s <span>Terms and Conditions</span></div>
            <Button id="signup-btn" text="Continue" isLoading={isLoading} style={{marginTop: "10px"}} callback={validateInput} />
        </div>
        
    </form>
}