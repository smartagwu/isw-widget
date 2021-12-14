import { useState, useEffect } from "react";
import OtpComponent from "./component";

export default function Otp(props:{ updateOtp: (otp:Array<number>) => void }){
    var initialValue: Array<any> = [];
    const [ otp, setOtp ] = useState(initialValue);

    useEffect(()=> {
        document.getElementById("input-1")?.focus();
        for(let i=2; i<=4; i++){
            document.getElementById(`input-${i}`)?.setAttribute("disabled", "true");
        }
    })

    function onInput(e: React.KeyboardEvent<HTMLInputElement>, id: number) {
        var arr = otp;
        var key = Number(e.key);
        if(typeof key === "number" && !isNaN(key)){
            if(id === 4 && (document.getElementById("input-4") as HTMLInputElement).value){
                e.preventDefault();
                return;
            }
            
            arr.push(key);
            setOtp(arr);
            props.updateOtp(arr);
            
            if(id < 4){
                setTimeout(() => {
                    const element = document.getElementById(`input-${id+1}`);
                    element?.removeAttribute("disabled");
                    element?.focus();
                    document.getElementById(`input-${id}`)?.setAttribute("disabled", "true");
                }, 100);
            }
        }

        if(e.key === "Backspace"){
            if(arr.length > 0){
                arr.pop();
                setOtp(arr);
                props.updateOtp(arr);
            }

            const element = document.getElementById(`input-${id}`) as HTMLInputElement;
            const element2 = document.getElementById(`input-${id-1}`) as HTMLInputElement;
            if(!element.value && id !== 1){
                element2.value = "";
                element2?.removeAttribute("disabled");
                element2?.focus();
                element?.setAttribute("disabled", "true");
            }
        }
    }

    return <OtpComponent callback={onInput} />
}