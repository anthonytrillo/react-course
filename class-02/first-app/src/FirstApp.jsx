function FirstApp() {
  const nombre = "Anita";
  const mascotas = ["mishi", "luna", "bella", "apolo"];

  return (
    <>
      <p id="nombre">Nombre: {nombre}</p>
      <p>Lista de Mascotas:</p>
      <ul>
        {mascotas.map((nombre, index) => <li key={index}>{nombre}</li>)}
      </ul>
    </>
  )
}

export default FirstApp;