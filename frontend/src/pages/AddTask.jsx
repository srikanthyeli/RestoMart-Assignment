import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

function AddTask() {
  const navigate = useNavigate();

  const handleAdd = (task) => {
    fetch('https://retromart-backend.onrender.com/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then(() => navigate('/'));
  };

  return (
    <div className="container">
      <h2>Add Task</h2>
      <TaskForm onSubmit={handleAdd} />
    </div>
  );
}

export default AddTask;
