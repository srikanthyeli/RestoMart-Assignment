import { useState } from 'react';

function TaskForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [status, setStatus] = useState(initialData.status || 'todo');
  const [dueDate, setDueDate] = useState(initialData.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required');
      return;
    }
    onSubmit({ title, description, status, dueDate });
    console.log(description, status, dueDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
