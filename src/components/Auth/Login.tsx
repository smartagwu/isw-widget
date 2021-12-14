
import "./auth.css"
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import InputField from "../shared/InputField";
import Request from "../../requests/request";
import { LOGIN } from "../../requests/endpoints"

export default function Login(props:{ signup:()=>void, showLoansOption:()=>void}) {
    const style = { marginBottom: "10px" }
    const [isLoading, setLoader ] = useState(false);

    function validateInput() {
        const emailAddress = (document.getElementById("email-phone") as HTMLInputElement).value;
        const passowrd = (document.getElementById("password") as HTMLInputElement).value;

        var arr = [
            { value: emailAddress, name: "email address or phone number" },
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
            let response = await Request().get(LOGIN);
            if(response.responseCode === "00") props.showLoansOption();
            else alert(response.responseMessage);
        } catch {
            alert("Failed to create account");
        }
        setLoader(false);
    }

    useEffect(() => {
        document.getElementById("email-phone")?.focus();
    });

    return <form onSubmit={(e) => e.preventDefault()}>
        <InputField type="text" placeHolder="Email Address or Phone Number" id="email-phone" style={style} />
        <InputField type="password" placeHolder="Password" id="password" style={style} />
        <Button id="signup-btn" text="Login" isLoading={isLoading} style={{marginTop: "20px"}} callback={validateInput} />
        <p className="bottom-text">New to Quickteller? <span className="text-bold" onClick={props.signup}>Sign up here</span></p>
    </form>
}