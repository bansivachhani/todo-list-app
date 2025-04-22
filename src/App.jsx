import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, status: "Pending" }]);
  };

  const updateTask = (id, updatedText) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, text: updatedText } : task
    )));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => (
      task.id === id
        ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
        : task
    )));
  };

  return (
    <div className="container">
      <h1>TODO List Demo App</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;
