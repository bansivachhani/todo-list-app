import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => setTask(e.target.value);

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
