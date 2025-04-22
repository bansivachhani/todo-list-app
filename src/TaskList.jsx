import React, { useState } from "react";

const TaskList = ({ tasks, updateTask, deleteTask, toggleStatus }) => {
  const [editMode, setEditMode] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditChange = (e) => setNewText(e.target.value);

  const handleUpdate = (id) => {
    if (newText.trim()) {
      updateTask(id, newText);
      setEditMode(null);
      setNewText("");
    }
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>No tasks yet. Add some!</td>
          </tr>
        ) : (
          tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>
                {editMode === task.id ? (
                  <input
                    type="text"
                    value={newText}
                    onChange={handleEditChange}
                    placeholder="Edit task"
                  />
                ) : (
                  task.text
                )}
              </td>
              <td>
                <button
                  className={`status-btn ${task.status === "Completed" ? "completed" : "pending"}`}
                  onClick={() => toggleStatus(task.id)}
                >
                  {task.status}
                </button>
              </td>
              <td>
                {editMode === task.id ? (
                  <>
                    <button onClick={() => handleUpdate(task.id)}>✔</button>
                    <button onClick={() => setEditMode(null)}>✖</button>
                  </>
                ) : (
                  <button onClick={() => {
                    setEditMode(task.id);
                    setNewText(task.text);
                  }}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskList;
