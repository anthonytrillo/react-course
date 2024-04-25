import { useState, useMemo } from "react";

const Square = ({ value }) => {
  console.log('Renderizando Square ', value); // Se imprime en cada renderización
  return <div>{value * value}</div>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Memoizamos el valor que pasamos al componente Square
  // const squaredValue = useMemo(() => {
  //   return count;
  // }, [count]);

  console.log('Renderizando Counter'); // Se imprime en cada renderización

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        Current value: {count}
      </div>
      {/* <Square value={squaredValue} /> */}
      <Square value={count} /> No utilizamos useMemo aquí
    </div>
  );
};

export default Counter;