import PropTypes from 'prop-types';

// Definimos el componente Saludo que recibe props
function Saludo({ nombre, apellido}) {
  return <h1>Hola, {nombre} {apellido}!</h1>;
}

function App() {

  return (
      <div>
        <Saludo nombre="Juan" apellido="Martinez" /> {/* Pasamos "Juan" como prop nombre */}
      </div>
  )
}

Saludo.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string
}

Saludo.defaultProps = {
  nombre: 'Anthony',
  apellido: 'Trillo'
}

export default App
