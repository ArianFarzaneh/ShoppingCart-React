import React, { useContext } from 'react'
import {createContext} from 'react'
import Input from './Input'
import { FilterType } from '../Interfaces/interfaces'
import { productsContext } from '../App'
import { ProuctType } from '../Interfaces/interfaces'
export const filterContext=createContext<FilterType>({name:'' , type:''})
const Filter = () => {
    const {state , dispatch}=useContext(productsContext)
    function ascending()
  {
    dispatch({type:"Update_state" , payload:state.products.sort((a:ProuctType,b:ProuctType)=>Number(a.price)-Number(b.price))})
  }
  function descending()
  {
    dispatch({type:"Update_state" , payload:state.products.sort((a:ProuctType,b:ProuctType)=>Number(b.price)-Number(a.price))})
  }
  return (
    <div className='bg-gray-700 w-[450px] flex flex-col items-start p-5 gap-4 text-white'>
        <div className="text-3xl">Fliter Products</div>
        <filterContext.Provider value={{name:'orders' , type:'radio'}} >
            <Input text='Ascending' onClick={ascending}/>
            <Input text='Descending' onClick={descending}/>
        </filterContext.Provider>
        <filterContext.Provider value={{type:'checkbox'}}>
            <Input text='Include Out of Stock'/>
            <Input text='Fast Delivery Only'/>
        </filterContext.Provider>
    </div>
  )
}

export default Filter