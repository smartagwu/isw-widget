import "./auth.css"
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import InputField from "../shared/InputField";
import Request from "../../requests/request";
import { SIGNUP } from "../../requests/endpoints"

export default function Signup(props:{ login:()=>void, showLoansOption:()=>void }) {
    const style = { marginBottom: "10px" }
    const [isLoading, setLoader ] = useState(false);
    
    function validateInput() {
        const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
        const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
        const emailAddress = (document.getElementById("email") as HTMLInputElement).value;
        const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value;
        const passowrd = (document.getElementById("password") as HTMLInputElement).value;

        var arr = [
            { value: firstName, name: "first name" }, 
            { value: lastName, name: "last name" }, 
            { value: emailAddress, name: "email address" }, 
            { value: phoneNumber, name: "phone number" }, 
            { value: passowrd, name: "password" }
        ];

        for(let i=0; i<arr.length; i++){
            if(!arr[i].value){
                alert("Kindly enter your "+ arr[i].name);
                return;
            }
        }

        authenticateUser();
    }

    async function authenticateUser() {
        setLoader(true);
        try {
            let response = await Request().get(SIGNUP);
            if(response.responseCode === "00") props.showLoansOption();
            else alert(response.responseMessage);
        } catch {
            alert("Failed to create account");
        }
        setLoader(false);
    }

    useEffect(() => {
        document.getElementById("first-name")?.focus();
    });

    return <form onSubmit={(e) => e.preventDefault()}>
        <ul className="form-grid">
            <li key="first-name"> <InputField type="text" placeHolder="First Name" id="first-name" style={style} /> </li>
            <li key="last-name"> <InputField type="text" placeHolder="Last Name" id="last-name" style={style} /> </li>
            <li key="email"> <InputField type="email" placeHolder="Email Address" id="email" style={style} /> </li>
            <li key="phone-number"> <InputField type="tel" placeHolder="Phone Number" id="phone-number" style={style} /> </li>
        </ul>
        <InputField type="password" placeHolder="Password" id="password" style={style} />
        <Button id="signup-btn" text="Continue" isLoading={isLoading} style={{marginTop: "20px"}} callback={validateInput} />
        <p className="bottom-text">Already have an account? <span className="text-bold" onClick={props.login}>Login</span></p>
    </form>
}