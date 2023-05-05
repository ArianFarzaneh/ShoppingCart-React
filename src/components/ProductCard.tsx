import { useContext, useEffect, useState } from 'react';
import { productContext } from '../layout/Shop';
import { ProuctType } from '../Interfaces/interfaces';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ButtonShop from './ButtonShop';
import { productsContext } from '../App';

function ProductCard() {
  const product = useContext<ProuctType>(productContext);
  const { dispatch , state } = useContext(productsContext);
  const [isAdd, setIsAdd]=useState(false)
  useEffect(()=>{
    const addedToCart=state.cart.some(item=>item.id===product.id)
    setIsAdd(addedToCart)
    console.log(addedToCart);
    
  },[state])

  return (
    <div className="max-w-sm col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border shadow-md flex flex-col gap-2">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div className="p-3 ">
        <h2 className="font-bold ">{product.name}</h2>
        <h3 className="py-1">$ {product.price}</h3>
        <p>{product.fastDelivery ? 'Fast Delivery' : '4 days delivery'}</p>
        <div className="flex gap-1 py-1">
          {[1, 2, 3, 4, 5].map((rate) => {
            if (rate <= product.ratings) return <AiFillStar key={rate} />;
            return <AiOutlineStar key={rate} />;
          })}
        </div>
        <ButtonShop
          onClick={() => {isAdd ?dispatch({ type: 'Delete_from_Cart', payload: product }) :dispatch({ type: 'Add_to_Cart', payload: product }) }}
          text={isAdd ? "Delete from cart" :product.inStock>0?"Add to cart" : "Out of stock" }
          cssClass={`${isAdd?"bg-red-600":product.inStock>0?"bg-blue-600":"bg-blue-400"} text-white p-2 px-4 rounded-sm text-center font-semibold `}
          disabled={product.inStock>0?false:true}
        />
      </div>
    </div>
  );
}

export default ProductCard;
