import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`https://retromart-backend.onrender.com/tasks`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id);
        if (found) setTask(found);
      });
  }, [id]);

  const handleUpdate = (updatedTask) => {
    fetch(`https://retromart-backend.onrender.com/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    })
      .then(() => navigate('/'));
  };

  if (!task) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container">
      <h2>Edit Task</h2>
      <TaskForm onSubmit={handleUpdate} initialData={task} />
    </div>
  );
}

export default EditTask;
