import { productsContext } from '../App';
import { useContext, createContext } from 'react';
import { ProuctType } from '../Interfaces/interfaces';
import ProductCard from '../components/ProductCard';

export const productContext = createContext<ProuctType>({});
function Shop() {
  const { state } = useContext(productsContext);

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      {state.products.map((product) => {
        return (
          <productContext.Provider value={product} key={product.id}>
            <ProductCard key={product.id} />
          </productContext.Provider>
        );
      })}
    </div>
  );
}

export default Shop;
