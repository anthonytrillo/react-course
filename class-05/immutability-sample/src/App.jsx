import { useState, useEffect } from 'react';

function App() {
  const [array, setArray] = useState( [1, 2] );

  // Mostrar estado actual de array
  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <>
      {/* <span>{ JSON.stringify(array) }</span> */}
      <button
        onClick={() => {
          // array.push(3); // Mal
          // setArray(array);
          setArray( [...array, 3] ); // Bien
          console.log(array)
        }}
      >
        Sample
      </button>
    </>
  );
}

export default App
