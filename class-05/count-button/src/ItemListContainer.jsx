import ItemCount from './ItemCount';

const ItemListContainer = () => {
  const stock = 10; // Ejemplo de stock disponible
  const onAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} ítems al carrito`);
  };

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;