import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: []
})


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };
    useEffect(() => {
        addCollectionAndDocuments('collections', SHOP_DATA);
    }, []);
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}