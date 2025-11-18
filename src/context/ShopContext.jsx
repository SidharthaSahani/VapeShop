import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
 
    const currency = "Rs";
    const delivery_fee = 10;
    
    const values = {
        products , currency , delivery_fee
    }

    return (
        <ShopContext.Provider value={ values  }>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;