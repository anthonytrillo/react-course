import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
      ]);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="item-list-container">
      <h1>Welcome to our Store</h1>
      {
        loading
        ? <div>Cargando...</div>
        : <ItemList items={items} />
      }
    </div>
  );
};

export default ItemListContainer;