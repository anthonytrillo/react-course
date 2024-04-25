import { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTaskText} onChange={handleInputChange} />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;