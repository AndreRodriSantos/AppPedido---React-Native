export const CARD_ADD = 'PRODUCTS_ADD'
export const CARD_REMOVE = 'PRODUCTS_REMOVE'
export const CARD_CLEAR = 'PRODUCTS_CLEAR'
export const CARD_FINISH = 'PRODUCTS_FINISH'

export const productsAdd = (value) => ({
    type: CARD_ADD,
    value
})

export const productsRemove = (value) => {
    type: CARD_REMOVE,
    value
}

export const productsClear = () => {
    type: CARD_CLEAR
}

export const productsFinish = () => {
    type: CARD_FINISH
}
