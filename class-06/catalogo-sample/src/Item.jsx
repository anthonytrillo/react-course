const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default Item;