import React from 'react'
import CartItem from './CartItem';
import {useContext} from 'react'
import { productsContext } from '../App';
const Cart = () => {
    const { state } = useContext(productsContext);
  return (
    <div className="w-72 bg-white rounded-md shadow-md text-gray-700 absolute right-0 top-12 flex flex-col gap-1">
        {state.cart.map(item=><CartItem item={item} key={item.id} />)}
    </div>
        
  )
}

export default Cart