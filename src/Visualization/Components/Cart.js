import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../Reducers/Carrinho';

import './Styles/Cart.css'

const Cart = () => {
    const items = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    
    return(
        <div className="main">
            <div className="box">
                {items.map((item)=>
                <div className="itens">
                    <img src={item.photo}/> {item.name}, R$ {item.price} <button onClick={()=>{dispatch(removeItem(item.id))}}>remove</button>
                </div>)}
            </div>
        </div>
    )
}

export default Cart;