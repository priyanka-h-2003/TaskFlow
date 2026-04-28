import { useEffect, useState } from "react";
import Progressstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import "./Style.css"

export default function App() {
  const[tasks, setTasks] = useState([]);

  
  useEffect(() => {
    localStorage.setItem("tasks", 
      JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task) =>
     {
    setTasks([...tasks,task]);
  }
  const updateTask =(updatedTask, index) => {
    const newtask = [...tasks];
      newtask[index] = updatedTask;
      setTasks(newtask)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearAllTasks = () => {
    setTasks([]);
  }

  const clearTasks = () => {
    const upTasks = tasks.filter(task => ! task.completed);
    setTasks(upTasks); 
  }

  return(
    <div className="container">
      <h1 className="heading">TaskFlow</h1>
      <p className="para"> Your friendly Task Manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <Progressstracker tasks = {tasks}/>
      {tasks.length > 0 && (
      <button onClick={clearAllTasks} className= "clear-btn">Clear All Tasks</button>)}
      {tasks.length > 0 && (
      <button onClick={clearTasks} className="all-btn">Clear Completed Tasks</button>)}
    </div>
  )
}