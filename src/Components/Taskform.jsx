import { useState } from "react";

export default function Taskform({addTask}) {
  const [task,setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('genenal');

  const handleSubmit = (e) => {
    e.preventDefault(); // refresh
    addTask({
      text: task, 
      priority, 
      category, 
      completed: false
    });

    //reset
    setTask('');
    setPriority('medium');
    setCategory('general');
  };

  return(
    <form onSubmit={handleSubmit}> 
      <div className="input-section">
        <input type="text" placeholder="Enter the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
        <button type="submit" className="add-btn">Add Task</button>
        <h1 className="meta">{task} {priority} {category}</h1>
      </div>

      <div className="filter">
        <select  className="med"value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select className="gen"value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  )
}