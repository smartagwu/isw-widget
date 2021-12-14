import './App.css';
import React, { useEffect, useState } from 'react';
import WidgetOptions from '../model/widgetOptions';
import Request from '../requests/request';
import { GET_MULTIPLE_OFFERS, VALIDATE_TOKEN } from '../requests/endpoints';
import { LoanOptionType } from "../model/appTypes";
import OffersType from '../model/offers';
import { RepaymentOptionType } from '../model/appTypes';
import AppComponent from "./component";
import { IframeMessage } from '../model/appTypes';
import Animation from '../utils/animation';

var offerInitialState:OffersType = {
      "offerId": "",
      "amountOffered": 0,
      "interest": 0,
      "amountPayable": 0,
      "tenure": 0,
      "currency": "",
      "terms": "",
      "provider": {
        "id": 0,
        "name": "",
        "code": "",
        "domainCode": "",
        "description": "",
        logo: ""
    }
}

var optionsInitialValue: WidgetOptions = {
  token: "",
  email: "",
  customerId: "",
  firstName: "",
  lastName: "",
  countryCode: "",
  onClose: () => {},
  onFailed: (error) => {},
  onSuccessful: () => {}
}


function App() {
  const [ offers, updateOffers ] = useState([]);
  const [ offer, updateOffer ] = useState(offerInitialState);
  const [ currentPage, setCurrentPage ] = useState("loading");
  const [options, updateOptions ] = useState(optionsInitialValue);

  useEffect(()=>{
    bindEvent(window, "message", (e) => {
      var options:WidgetOptions = JSON.parse(e.data);
      updateOptions(options);
      if(options.token && options.token !== "") validateToken();
      else setCurrentPage("signup");
    });
  });

  function bindEvent(element:HTMLElement | Window, event:string, handler:(e:any) => void): void{
    if(element.addEventListener){
      element.addEventListener(event, handler, false);
    }
  }

  async function onLoanOptionSelected(type:LoanOptionType) {
    if(type === "request-loan"){
      try {
            let response = await Request().get(GET_MULTIPLE_OFFERS);
            if(response.responseCode === "00") {
              updateOffers(response.offers);
              onRequestLoanClick();
            }else alert(response.responseMessage);
        } catch {
            alert("Something went wrong, please try again");
        }
    }else if(type === "repay-loan"){
      alert("Repay loan feature is not available at the moment");
    }
  }

  function onRequestLoanClick() {
        Animation().slideOutPage("loan-option", () => setCurrentPage("offers"));
    }

  function onOffersOptionSelected(offer:OffersType) {
    updateOffer(offer);
    setCurrentPage("repayment-options");
  }

  function onRepaymentOptionSelected(type:RepaymentOptionType) {
    if(type === "debit-card") setCurrentPage("checkout");
    else alert("Direct to account debit is not available at the moment");
  }

  function closeWidget(type:string){
    if(type === "success" && options.onSuccessful) {
      options.onSuccessful();
    }

    var message:IframeMessage = {
      type: "close",
      payload: null
    }
    window.parent.postMessage(message, "*");
  }

  async function validateToken() {
    try {
        let response = await Request().get(VALIDATE_TOKEN);
        if(response.responseCode === "00") setCurrentPage("loan-options");
        else alert(response.responseMessage);
    } catch {
        alert("Failed to validate channel token");
    }
  }

  return <AppComponent
      offer={offer}
      currentPage={currentPage}
      offers={offers}
      closeWidget={closeWidget}
      setCurrentPage={setCurrentPage}
      onLoanOptionSelected={onLoanOptionSelected}
      onOffersOptionSelected={onOffersOptionSelected}
      onRepaymentOptionSelected={onRepaymentOptionSelected}
   />
}
export default App;
