import React from 'react';

export default React.createContext({
    products: [
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
    ],
    cart: [],
    addProductToCart: product => {
        console.log(product)
    },
    removeProductFromCart: productId => {}

})