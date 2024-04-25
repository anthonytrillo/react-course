import { useState, useEffect, useCallback, useMemo } from 'react';
import TasksContext from './contexts/TaskContext';

import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulamos una llamada a una API para obtener tareas
    const fetchTasks = () => {
      setTimeout(() => {
        setTasks([
          { id: 1, text: 'Hacer la compra', completed: false },
          { id: 2, text: 'Hacer ejercicio', completed: false },
          { id: 3, text: 'Leer un libro', completed: false }
        ]);
      }, 1000);
    };

    fetchTasks();
  }, []);

  const addTask = useCallback(text => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, [tasks]);

  const completeTask = useCallback(id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, completeTask }}>
      <div>
        <h1>Task Manager</h1>
        <h2>Tasks</h2>
        <TaskList />
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map(task => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
        <AddTaskForm />
      </div>
    </TasksContext.Provider>
  );
};

export default TaskApp;