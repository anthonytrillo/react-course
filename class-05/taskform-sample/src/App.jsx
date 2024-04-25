import { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Hacer ejercicio', completed: false },
    { id: 3, text: 'Leer un libro', completed: false }
  ]);

  const addTask = (newTaskText) => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTaskText, completed: false }]);
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  )
}

export default App
