
import "./auth.css"
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import InputField from "../shared/InputField";
import Request from "../../requests/request";
import Animation from "../../utils/animation";
import { LOGIN } from "../../requests/endpoints";

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
            if(response.responseCode === "00") onAuthSuccessful()
            else alert(response.responseMessage);
        } catch {
            alert("Failed to create account");
        }
        setLoader(false);
    }

    function onSignupClick() {
        Animation().slideOutPage("login-parent", props.signup);
    }

    function onAuthSuccessful() {
        Animation().slideOutPage("login-parent", props.showLoansOption);
    }

    useEffect(() => {
        document.getElementById("email-phone")?.focus();
    });

    return <form id="login-parent" className="App-parent" onSubmit={(e) => e.preventDefault()}>
        <InputField type="text" placeHolder="Email Address or Phone Number" id="email-phone" style={style} />
        <InputField type="password" placeHolder="Password" id="password" style={style} />
        <Button id="signup-btn" text="Login" isLoading={isLoading} style={{marginTop: "20px"}} callback={validateInput} />
        <p className="bottom-text">New to Quickteller? <span className="text-bold" onClick={onSignupClick}>Sign up here</span></p>
    </form>
}