import React from 'react'
import { ProuctType } from '../Interfaces/interfaces';
import {BsFillTrashFill} from 'react-icons/bs'
import {useContext} from 'react'
import { productsContext } from '../App';
const CartItem = ({item}:{item:ProuctType}) => {
    const { dispatch } = useContext(productsContext);
  return (
    <div className='flex justify-between gap-3 p-4 items-center'>
      <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center" ><img className='h-full w-full' src={item.image} alt="" /></div>
      <div className="flex flex-col">
        <span className='font-semibold'>{item.name}</span>
        <span>$ {item.price}</span>
      </div>
      <button className="" onClick={()=>dispatch({ type: 'Delete_from_Cart', payload: item })}><BsFillTrashFill /></button>
    </div>
  )
}

export default CartItem