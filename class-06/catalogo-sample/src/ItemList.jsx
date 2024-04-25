import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Product List</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;