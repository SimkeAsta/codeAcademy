import { useContext } from "react";
import { StoreContext } from "./reducerForBasket/StoreContext";

export const BasketItem = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemoveItem = () => {
    removeFromBasket(item.id);
  }

  return (
    <div
      style={{
        display: "flex",
        margin: "40px",
        justifyContent: "space-around",
      }}
    >
      <img style={{ width: "300px" }} src={item.thumbnail} />
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <button onClick={handleRemoveItem}>DELETE</button>
    </div>
  );
};
