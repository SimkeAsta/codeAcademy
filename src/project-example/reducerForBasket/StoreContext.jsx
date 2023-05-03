import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    // updateTotalPrice(updatedBasket);

    dispatch({
      type: "add",
      payload: product,
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: "delete",
      payload: id
    })
  };

  return (
    <StoreContext.Provider
      value={{ total: state.total, products: state.products, addToBasket, removeFromBasket }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;
