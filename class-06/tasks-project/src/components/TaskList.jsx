import { useContext } from 'react';
import TasksContext from "../contexts/TaskContext";

import Task from './Task';

const TaskList = () => {
  const { tasks, completeTask } = useContext(TasksContext);

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} {...task} onComplete={completeTask} />
      ))}
    </ul>
  );
};

export default TaskList;