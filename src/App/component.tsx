import Login from "../components/Auth/Login" ;
import Signup from "../components/Auth/Signup";
import logo from "../assets/images/logo.svg";
import close from "../assets/images/close.svg";
import Loader from "../components/shared/Loader/Loader";
import LoanOptions from "../components/LoanOptions";
import RepaymentOption from "../components/RepaymentOption";
import Offers from "../components/Offers";
import Checkout from "../components/Checkout/Checkout";
import AppComponentProps from "../model/appComponentProps"

export default function AppComponent(props:AppComponentProps) {
    const { offer, offers, currentPage, setCurrentPage, closeWidget, onLoanOptionSelected, onOffersOptionSelected, onRepaymentOptionSelected } = props;
    
    return (
        <div className="App">
            <div style={{opacity: "50%"}} className="App-overlay center"></div>
            <div className="App-widget center">
                <div className="header">
                    <div style={{margin: "auto", marginRight: "0px", cursor: "pointer", width: "fit-content"}}>
                        <img style={{width: "25px"}}  src={close} alt="close img" onClick={() => closeWidget("close")} title='close'/>
                    </div>
                    <div style={{ margin: "auto", width: "fit-content"}}>
                        <img style={{width: "150px"}}  src={logo} alt="logo img" />
                    </div>
                </div>

                <div className='widget-content'>
                    { 
                        currentPage === "signup" ? <Signup login={()=> setCurrentPage("login")} showLoansOption={()=> setCurrentPage("loan-options")} /> : 
                        currentPage === "login" ? <Login signup={()=> setCurrentPage("signup")} showLoansOption={()=> setCurrentPage("loan-options")}/> :
                        currentPage === "loan-options" ? <LoanOptions onSelectOption={onLoanOptionSelected}/> : 
                        currentPage === "offers" ? <Offers offers={offers} onSelectOption={onOffersOptionSelected}/> : 
                        currentPage === "repayment-options" ? <RepaymentOption onSelectOption={onRepaymentOptionSelected}/> : 
                        currentPage === "checkout" ? <Checkout offer={offer} closeWidget={closeWidget}/> : <Loader color='#03435F' top="-80px"/>
                    }
                </div>
            </div>
        </div>
    )
}