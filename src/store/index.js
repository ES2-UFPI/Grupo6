import { createStore, combineReducers } from 'redux'

import cartReducer from '../Reducers/Carrinho'

const rootReducer = combineReducers({
    cart: cartReducer
})

export default createStore(rootReducer)