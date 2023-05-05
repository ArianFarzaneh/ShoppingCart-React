import { BsFillCartFill } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { productsContext } from '../App';
import { useContext , useState} from 'react';
import Cart from './Cart';

function ButtonCart() {
  const [isDropOpen,setIsDropOpen]=useState(false)
  const { state } = useContext(productsContext);
  return (
    <div className='relative'>
      <button className="flex items-center gap-2 rounded-sm p-2 bg-green-700 text-white"
              onClick={()=>setIsDropOpen(!isDropOpen)}
      >
        <BsFillCartFill />
        <span>{state.cart.length}</span>
        <MdArrowDropDown />
      </button>
      {isDropOpen&&<Cart />}
    </div>
  );
}

export default ButtonCart;
