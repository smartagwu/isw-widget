import "./input.css";
import Loader from "./Loader/Loader";
import { ButtonProps } from "../../model/inputProps";

export default function Button(props:ButtonProps) {
    return <button className="button" id={props.id} style={props.style} onClick={props.callback}>
        {props.isLoading ? <Loader color="#ffffff" top="-45px" /> : props.text}
    </button>
}

Button.defaultProps = {
    style: {},
    isLoading: false
}

//<Button id="test-id" text="Test Button" callback={(data) => console.log("hi")} />