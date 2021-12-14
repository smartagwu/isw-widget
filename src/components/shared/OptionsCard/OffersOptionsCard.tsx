import OptionsCard from "./component";
import { OffersOptionsCardProps } from "../../../model/optionsCardProps";

export default function OffersOptionsCard(props: OffersOptionsCardProps) {
    function formatAmount(amount:number):string{
        if(!amount || typeof amount !== "number") return "";
        const currency = props.offers.currency === "566" ? "₦" : "";
        const _amount = (amount / 100).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return currency + _amount;
    }

    function OfferDetails(){
        const {amountOffered, provider, amountPayable, tenure} = props.offers;
        return <div className="offer-details">
            <p className="title text-semi-bold">{ formatAmount(amountOffered)} - <span>{ provider.name }</span></p>
            <p className="subtitle text-regular">Payback { formatAmount(amountPayable)} in {tenure} days</p>
        </div>
    }

    return <OptionsCard icon={props.offers.provider.logo} content={ <OfferDetails /> } callback={()=> props.callback(props.offers)} style={props.style}/>
}

OffersOptionsCard.defaultProps = {
    style: {},
    callback: ()=> {}
}