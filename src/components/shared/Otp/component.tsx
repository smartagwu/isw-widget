import "../input.css";
import InputField from "../InputField";

export default function OtpComponent(props: {callback: (e:React.KeyboardEvent<HTMLInputElement>, id:number)=> void}) {
    var style = {
        width: "10px", 
        fontWeight: 700,
        padding: "10px 20px",
    }

    return <ul className="otp-input">
        <li key="list-1"> 
            <InputField type="number" id="input-1" style={{boxSizing: "content-box", ...style}} callback={(e) => props.callback(e, 1)} />
        </li>

        <li key="list-2"> 
            <InputField type="number" id="input-2" style={{boxSizing: "content-box", ...style}} callback={(e) => props.callback(e, 2)} />
        </li>

        <li key="list-3"> 
            <InputField type="number" id="input-3" style={{boxSizing: "content-box", ...style}} callback={(e) => props.callback(e, 3)} />
        </li>

        <li key="list-4">
            <InputField type="number" id="input-4" style={{boxSizing: "content-box", ...style}} callback={(e) => props.callback(e, 4)} />
        </li>
        
    </ul>
}