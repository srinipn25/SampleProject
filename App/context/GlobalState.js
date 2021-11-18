import React, { useState } from 'react'
import ShopContext from './shop-context';

const GlobalState = (props) => {
    const [products, setProducts] = useState([
        {
            id: 0,
            name: 'Guac de la Costa',
            description: 'tortillas de mais, fruit de la passion, mango',
            cost: 7,
            checked: 0,
            qty: 1,
        },
        {
            id: 1,
            name: 'Chincharron y cerveza',
            description: 'citron vert / corona sauce',
            cost: 7,
            checked: 0,
            qty: 1
        },
        {
            id: 2,
            name: 'chilltos con cart',
            description: 'padrones tempura gambles',
            cost: 7,
            checked: 0,
            qty: 1
        },
        {
            id: 3,
            name: 'Dominos',
            description: 'Sandwich,pizza, Shake',
            cost: 7,
            checked: 0,
            qty: 1
        }
    ])

    const [cart, setCart] = useState([]);

    const addProductToCart = product => {
        const newItems = [...products]
        newItems[product.id].checked = (product.checked == 0) ? 1 : 1;
        const updatedCart = [...cart]
        const updatedItemIndex = updatedCart.findIndex(
            item => item.id === product.id
        );

        console.log(updatedItemIndex)

        if (updatedItemIndex < 0) {
            updatedCart.push({ ...product, quantity: 1 });
        } else {
            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            }

            if (updatedItem.quantity<=19) {
                updatedItem.quantity++;
            } 
            
            updatedCart[updatedItemIndex] = updatedItem
        }
        setCart(updatedCart)
    }

    const removeProductFromCart = productId => {
        const updatedCart = [...cart]
        const updatedItemIndex = updatedCart.findIndex(
            item => item.id === productId
        );

        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity--;
        if (updatedItem.quantity <= 0) {
            const newItems = [...products]
            newItems[productId].checked = (true) ? 0 : 0;
            updatedCart.splice(updatedItemIndex, 1);
        } else {
            updatedCart[updatedItemIndex] = updatedItem;
        }
        setCart(updatedCart)
    }
    return (
        <ShopContext.Provider value={{
            products: products,
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductFromCart:removeProductFromCart
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default GlobalState;