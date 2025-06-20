import TaskItem from './TaskItem';
import "../components/TaskList.css";
function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TaskList;
