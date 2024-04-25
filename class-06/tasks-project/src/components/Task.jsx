const Task = ({ id, text, onComplete }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onComplete(id)} />
      <span>{text}</span>
    </li>
  );
};

export default Task;