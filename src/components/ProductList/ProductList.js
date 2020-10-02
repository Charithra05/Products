import React, { useContext } from "react";
import {productContext} from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductListStyle.css";

const ProductList = ()=>{
    const ProductContext = useContext(productContext);
    const returnedProducts= ProductContext.products.map((product)=>{
        return <ProductItem key={product.name} product={product}/>
    })
    return(
        <div className="list">
        {returnedProducts}
        </div>    
    )
}
export default ProductList;