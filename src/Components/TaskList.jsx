export default function TaskList({tasks, updateTask, deleteTask}) {
  const toggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTask, index);
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key = {index}>
          <div className="task-text">
            <span className={task.completed ? "completed-task" : ""}>{task.text}
              <small>({task.priority}, {task.category})</small>
            </span>
          </div>

          <div className="actions">
            <button className="complete-btn" onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
