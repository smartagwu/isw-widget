import card from "../assets/images/card.svg";
import wallet from "../assets/images/wallet.svg";
import OptionsCard from "./shared/OptionsCard/component";
import { LoanOptionType } from "../model/appTypes";

export default function LoanOptions(props:{ onSelectOption:(type:LoanOptionType)=>void }) {
    return <div style={{width: "100%", marginTop: "40px"}}>
        <p className="Widget-content-title">Get Loan in Minutes</p>
        <div style={{marginTop: "30px"}}>
            <OptionsCard iconHeight='30px' iconWidth='30px' icon={wallet} content="Request Loan" style={{ marginBottom: "10px" }} callback={()=> props.onSelectOption("request-loan")}  />
            <OptionsCard iconHeight='30px' iconWidth='30px' icon={card} content="Repay Loan" callback={()=> props.onSelectOption("repay-loan")} />
        </div>
    </div>
}