import { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para simular una consulta asincrónica
    const fetchTasks = () => {
      setTimeout(() => {
        // Simulamos la carga de tareas después de 2 segundos
        const data = [
          { id: 1, text: 'Hacer la compra' },
          { id: 2, text: 'Hacer ejercicio' },
          { id: 3, text: 'Leer un libro' }
        ];
        setTasks(data);
        setLoading(false); // Marcamos la carga como completada
      }, 2000);
    };

    fetchTasks(); // Llamamos a la función para simular la consulta asincrónica

    // No hay limpieza necesaria en este caso, por lo que no necesitamos devolver ninguna función de limpieza
  }, []); // La dependencia está vacía, por lo que este efecto solo se ejecutará una vez al montar el componente

  if (loading) {
    return <div>Cargando tareas...</div>;
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;