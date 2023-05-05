import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Input from "./Input";
import { FilterType } from "../Interfaces/interfaces";
import { productsContext } from "../App";
import { ProuctType } from "../Interfaces/interfaces";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const filterContext = createContext<FilterType>({ name: "", type: "" });
const Filter = () => {
  const [rate, setRate] = useState(0);

  const { state, dispatch, products } = useContext(productsContext);

  useEffect(() => {
    dispatch({
      type: "Update_state",
      payload: products.filter((item: ProuctType) => item.ratings === rate),
    });
  }, [rate]);
  function ascending() {
    dispatch({
      type: "Update_state",
      payload: state.products.sort(
        (a: ProuctType, b: ProuctType) => Number(a.price) - Number(b.price)
      ),
    });
  }
  function descending() {
    dispatch({
      type: "Update_state",
      payload: state.products.sort(
        (a: ProuctType, b: ProuctType) => Number(b.price) - Number(a.price)
      ),
    });
  }

  const handleFilter = function (e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    if (formData.has("delivary") && formData.has("stock")) {
      dispatch({
        type: "Update_state",
        payload: products.filter(
          (item: ProuctType) => item.fastDelivery && item.inStock >= 0
        ),
      });
    } else if (formData.has("delivary")) {
      dispatch({
        type: "Update_state",
        payload: state.products.filter(
          (item: ProuctType) => item.fastDelivery && item.inStock > 0
        ),
      });
    } else if (formData.has("stock")) {
      dispatch({ type: "Update_state", payload: products });
    } else {
      dispatch({
        type: "Update_state",
        payload: products.filter((item: ProuctType) => item.inStock > 0),
      });
    }
  };

  return (
    <div className="bg-gray-700 w-[450px] flex flex-col items-start p-5 gap-4 text-white">
      <div className="text-3xl">Fliter Products</div>
      <filterContext.Provider value={{ name: "orders", type: "radio" }}>
        <Input text="Ascending" onClick={ascending} />
        <Input text="Descending" onClick={descending} />
      </filterContext.Provider>

      <form onChange={(e) => handleFilter(e)}>
        <filterContext.Provider value={{ type: "checkbox", name: "stock" }}>
          <Input text="Include Out of Stock" />
        </filterContext.Provider>
        <filterContext.Provider value={{ type: "checkbox", name: "delivary" }}>
          <Input text="Fast Delivery Only" />
        </filterContext.Provider>
      </form>
      <div className="flex items-center gap-1">
        <p>Rating:</p>

        {[1, 2, 3, 4, 5].map((item) => {
          if (item <= rate) {
            return (
              <span onClick={() => setRate(item)}>
                <AiFillStar key={item} />
              </span>
            );
          }
          return (
            <span
              onClick={() => {
                setRate(item);
                console.log(rate);
              }}
            >
              <AiOutlineStar key={item} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
