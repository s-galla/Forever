import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delevery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigation=useNavigate();

    const addToCart = (itemID, size) => {
        //logic to add item to cart
        if (!size) {
            toast.error('Please select product size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemID]) {
            if (cartData[itemID][size]) {
                cartData[itemID][size] += 1;
            }
            else {
                cartData[itemID][size] = 1;
            }
        }
        else {
            cartData[itemID] = {};
            cartData[itemID][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        // for (const items in cartItems) {
        //     for (const item in cartItems[items]) {
        //         try {
        //             if (cartItems[items][item] > 0) {
        //                 totalCount += cartItems[items][item]
        //             }
        //         } catch (error) {

        //         }
        //     }
        // }
        return Object.values(cartItems).reduce((totalCount, itemGroup) => {
            return totalCount + Object.values(itemGroup).reduce((groupCount, count) => {
                return groupCount + (count > 0 ? count : 0);
            }, 0);
        }, 0);
        // return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    
    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            var itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
                catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delevery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity,getCartTotalAmount,navigation
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;