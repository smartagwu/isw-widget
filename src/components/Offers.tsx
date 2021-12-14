import OffersType from "../model/offers";
import Animation from "../utils/animation";
import OfferOptionsCard from "./shared/OptionsCard/OffersOptionsCard"

export default function Offers(props: { offers:Array<OffersType>, onSelectOption:(offer:OffersType)=>void}) {
    function onSelectOffer(offer:OffersType) {
        Animation().slideOutPage("offers-parent", ()=> props.onSelectOption(offer));
    }

    return <div id="offers-parent" className="App-parent" style={{width: "100%", maxWidth: "340px"}}>
        <p className="Widget-content-title">Select A Loan Offer</p>
        <ul style={{marginTop: "30px", listStyleType: "none"}}>
            {props.offers.map((offer, index) => {
                return <li style={{ marginBottom: "10px" }} key={"offer" + index}>
                    <OfferOptionsCard callback={onSelectOffer} offers={offer} />
                </li>
            })}
        </ul>
    </div>
}