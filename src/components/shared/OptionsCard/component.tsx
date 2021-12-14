import "./optionsCard.css"
import bank from "../../../assets/images/bank.svg";
import { OptionsCardProps } from "../../../model/optionsCardProps"

export default function OptionsCard(props: OptionsCardProps){
    return <div className="options-component" style={props.style} onClick={props.callback}>
        <div className="image">
            <img style={{ height: props.iconHeight, width: props.iconWidth, objectFit: "contain", borderRadius: "100%" }} src={props.icon} alt="img" />
        </div>
        <div className="content">{props.content}</div>
    </div>
}

OptionsCard.defaultProps = {
    icon: bank,
    style: {},
    iconWidth: "50px",
    callback: ()=> {},
    iconHeight: "50px",
    content: "Pay With Account"
}