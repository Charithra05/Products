import React, { createContext, useContext, useReducer } from 'react';
import ProductList from './components/ProductList/ProductList';
import {CURRENCY, PRODUCTS} from "./Data";
import CurrencyDropdown from "./components/CurrencyDropdown/CurrencyDropdown";
import axios from "axios";

export var currentCurrency=CURRENCY["India"];
export const productContext=createContext();


//Method for fetching Currency Value based on country 
export const getCurrencyValue=async (res)=>{
  const currencyvalue=await axios.get("https://api.exchangeratesapi.io/latest?base=INR");
  return currencyvalue.data.rates[res];
}

//reducer
const reducer=(currentState,action)=>{
  if(action.type=="CURRENCYCHANGE"){
    return currentState.map((product)=>{
      const price = Math.round(product.value*action.payload.currencyValue)
      return {...product,price: `${price} ${action.payload.currencyType}`}
    })
  }
  else return 
}


const App=()=>{
  const initialState=PRODUCTS;
  const[products,dispatch]=useReducer(reducer,initialState)
return(
  <productContext.Provider value={{products:products,currency:CURRENCY,dispatch}}>
    <CurrencyDropdown/>
    <ProductList/>
  </productContext.Provider>  
)

}
export default App;
