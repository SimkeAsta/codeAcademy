export const BasketItem = ({ item }) => {
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
    </div>
  );
};
