import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import "../pages/Home.css";
function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://retromart-backend.onrender.com/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    if (window.confirm('Are you sure you want to delete this task?')) {
      fetch(`https://retromart-backend.onrender.com/tasks/${id}`, { method: 'DELETE' })
        .then(() => setTasks(tasks.filter(task => task.id !== id)));
    }
  };

  return (
    <div className="div-container">
      <header className="text-center mb-4">
        <h1 className="display-5 fw-bold">Task Manager</h1>
        <Link to="/add" className="btn btn-secondary btn-style">Add New Task</Link>
      </header>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
