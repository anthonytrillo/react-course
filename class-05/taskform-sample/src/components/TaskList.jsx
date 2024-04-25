function TaskList({ tasks, completeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text} - Completada: {task.completed ? 'Sí' : 'No'}
          <button onClick={() => completeTask(task.id)}>Completar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;