import React from "react";
import {currentCurrency} from "../../App";
import "./ProductItemStyle.css";
const ProductItem=({product})=>{
    return(
        <div className="item">
            <img className="image"src={product.img}></img>
            <h2 className ="name">{product.name}</h2>
            <h2 className="price">{product.price}</h2>
        </div>
    )
}
export default ProductItem;