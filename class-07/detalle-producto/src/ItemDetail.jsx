const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default ItemDetail;