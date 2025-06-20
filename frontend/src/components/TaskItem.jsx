import { Link } from 'react-router-dom';
import "../components/TaskItem.css"; 
function TaskItem({ task, onDelete }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due:</strong> {task.dueDate || 'No due date'}</p>
      <div className="task-actions">
        <Link to={`/edit/${task.id}`}>
          <button className="btn btn-primary btn-style">Edit</button>
        </Link>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger btn-style-1">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
