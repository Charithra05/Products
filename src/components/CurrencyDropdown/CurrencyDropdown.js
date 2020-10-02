import React, { useContext} from "react";
import { productContext,getCurrencyValue,currentCurrency} from "../../App";
import "./CurrencyDropdownStyle.css";

const CurrencyDropdown=()=>{
    const ProductContext=useContext(productContext);
    const currency = ProductContext.currency;

    const handleChange=async (e)=>{
        const value = e.target.value;
       const res=await getCurrencyValue(value);
        ProductContext.dispatch({type:"CURRENCYCHANGE",payload:{currencyValue:res,currencyType:value}});       
    }
    return(
        <div className="drop-down">
        <select className="select" onChange={handleChange}>
            {Object.keys(currency).map((key) => (
                <option key={key} value={currency[key]}>
                    {key}
                </option>
            ))}
        </select>
        </div>
    )
}
export default CurrencyDropdown;