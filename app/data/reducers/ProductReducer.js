import { PRODUCTS_REQUEST, PRODUCTS_RESPONSE, PRODUCTS_SELECT } from "../actions/ProductActions"

export const initialState = {
    productsList: [

    ],

    selectProduct: null

}

export const productReduce = (store = initialState, actions) => {
    switch (action.type) {
        case PRODUCTS_RESPONSE:
            return {...store, productsList: actions.value}
        case PRODUCTS_SELECT:
            return {...store, selectProduct: actions.value}
        default: return store
    }
}