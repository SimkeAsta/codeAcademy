import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = state.products;
    updatedBasket.push(product);

    updateTotalPrice(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  const updateTotalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += Number(product.price);
    });

    dispatch({
      type: "updatePrice",
      payload: total,
    });
  };

  return (
    <StoreContext.Provider
      value={{ total: state.total, products: state.products, addToBasket }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;
