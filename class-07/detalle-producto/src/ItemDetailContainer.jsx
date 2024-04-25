import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const mockItem = {
  id: 1,
  name: "Producto",
  description: "Descripción del producto",
  price: 10.99,
  imageUrl: "https://via.placeholder.com/150"
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setItem(mockItem);
    };

    fetchItem();
  }, []);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;