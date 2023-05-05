import Shop from "./layout/Shop";
import axios from "axios";
import { useEffect, useState, createContext, useReducer } from "react";
import {
  ProuctType,
  actionsCartType,
  StateType,
} from "./Interfaces/interfaces";
import Header from "./layout/Header";
import Filter from "./components/Filter";

const initialState: StateType = {
  cart: [],
  products: [],
};

const reducer = (state: StateType, action: actionsCartType) => {
  switch (action.type) {
    case "Update_state":
      return { ...state, products: action.payload };
    case "Add_to_Cart":
      return { ...state, cart: [action.payload, ...state.cart] };
    case "Delete_from_Cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    // case 'Ascending_sort':

    // case 'Descending_sort':
    //   return
    default:
      break;
  }
};

export const productsContext = createContext({});
function App() {
  const [products, setProducts] = useState<ProuctType[]>();
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  useEffect(() => {
    axios("http://localhost:3002/Products").then((res) => {
      const allProducts = res.data;
      setProducts(allProducts);
      dispatch({
        type: "Update_state",
        payload: allProducts.filter((item) => item.inStock > 0),
      });
    });
  }, []);

  return (
    <>
      <productsContext.Provider value={{ state, dispatch, products }}>
        <Header />
        <div className="flex w-full gap-4 p-4 items-start">
          <Filter />
          <Shop />
        </div>
      </productsContext.Provider>
    </>
  );
}

export default App;
