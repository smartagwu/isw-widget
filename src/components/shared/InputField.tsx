import "./input.css";
import { InputFieldProps } from "../../model/inputProps";

export default function InputField(props:InputFieldProps)  {
    return <input 
        maxLength={props.maxLength} 
        className="input-field" 
        type={props.type} 
        name={props.placeHolder} 
        placeholder={props.placeHolder} 
        id={props.id}
        ref={props.ref}
        style={props.style}
        pattern={props.pattern}
        onKeyDown={(e) => props.callback(e)}
    />
}

InputField.defaultProps = {
    style: {},
    ref: null,
    type: "text",
    pattern: null,
    maxLength: null,
    placeHolder: "",
    callback: ()=> {},
    name: "input field"
}

//<InputField type="text" placeHolder="Enter name here" id="input-1" callback={(e) => console.log("input interaction")} />