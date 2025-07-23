import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const [cartItem, setcartItem] = useState({});

    const addTOcart = (itemId) => {
        if (!cartItem[itemId]) {
            setcartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }


    const removeFromcart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])
    

    const contextvalue = {
        food_list,
        cartItem,
        setcartItem,
        addTOcart,
        removeFromcart


    }
    return (
        <StoreContext.Provider value={contextvalue}>

            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;