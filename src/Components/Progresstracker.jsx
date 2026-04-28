export default function Progresstracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed).length;
      const totalTasks = tasks.length;
      const percenteage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
      const isAllComplete = totalTasks > 0 && completedTasks === totalTasks;
  return (
    <div className="progress-tracker">
      <p className="stats">
        {completedTasks} out of {totalTasks} tasks Completed
      </p>
      
      <div className="progress-bar">
        <div className= {`progress ${isAllComplete ? 'complete' : ''}`} 
        style={{ width: `${percenteage}%` }}>
        </div>
      </div>
    </div>
  )
}
