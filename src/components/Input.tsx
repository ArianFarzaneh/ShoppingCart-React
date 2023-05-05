import React from 'react'
import { useContext } from 'react'
import { filterContext } from './Filter'
let itemId=1
type Props = {
    text:string;
    onClick:()=>void;
}
const Input = ({text , onClick}:Props) => {
    const finalId=(itemId++).toString()
    const {name,type}=useContext(filterContext)
  return (
    <div className="flex gap-1">
        <input id={finalId} type={type} name={name} onClick={onClick}/>
        <label htmlFor={finalId}>{text}</label>
    </div>
  )
}

export default Input