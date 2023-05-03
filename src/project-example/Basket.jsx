import { useContext } from "react";
import { StoreContext } from "./reducerForBasket/StoreContext";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
  const { total, products } = useContext(StoreContext);
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <h3>Your Basket</h3>
        <p>Total: &euro; {total}</p>
      </div>
      {products.map((product) => (
        <BasketItem key={product.id} item={product} />
      ))}
    </div>
  );
};
