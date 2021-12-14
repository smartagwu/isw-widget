import card from "../assets/images/card.svg";
import bank from "../assets/images/bank.svg";
import Animation from "../utils/animation";
import OptionsCard from "./shared/OptionsCard/component";
import { RepaymentOptionType } from "../model/appTypes";

export default function RepaymentOption(props: { onSelectOption:(type:RepaymentOptionType)=>void}) {

    function onClickDebitOption() {
        Animation().slideOutPage("repayment-option", ()=> props.onSelectOption("debit-card"));
    }

    return <div id="repayment-option" className="App-parent" style={{width: "100%", marginTop: "40px"}}>
        <p className="Widget-content-title">Select Repayment Option</p>
        <div style={{marginTop: "30px"}}>
            <OptionsCard iconHeight='30px' iconWidth='30px' icon={card} content="Pay with Debit Card" style={{ marginBottom: "10px" }} callback={onClickDebitOption}  />
            <OptionsCard iconHeight='30px' iconWidth='30px' icon={bank} content="Pay with Account" callback={()=> props.onSelectOption("account")} />
        </div>
    </div>
}