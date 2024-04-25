import { useContext, useState } from 'react';
import TasksContext from "../contexts/TaskContext";

const AddTaskForm = () => {
  const { addTask } = useContext(TasksContext);
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = event => {
    setNewTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div>
      <input type="text" value={newTaskText} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;