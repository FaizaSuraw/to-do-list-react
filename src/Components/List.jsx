import { useState } from "react";

// Individual Task Component
function ToDo({ task, description }) {
  return (
    <div className="container">
      <p>
        <strong>Task:</strong> {task}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
}

// Main Component
function List() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Handle changes in task input
  function handleChangeTask(ev) {
    setTask(ev.target.value);
  }

  // Handle changes in description input
  function handleChangeDescription(ev) {
    setDescription(ev.target.value);
  }

  // Add a new task to the list
  function handleAddTask(ev) {
    ev.preventDefault();
    if (task.trim() && description.trim()) {
      const newTask = { task, description };
      setTaskList([...taskList, newTask]);
      setTask("");
      setDescription("");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task Name"
          className="input-form"
          value={task}
          onChange={handleChangeTask}
        />
        <input
          type="text"
          placeholder="Task Description"
          className="input-form"
          value={description}
          onChange={handleChangeDescription}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {taskList.map((item, index) => (
          <ToDo key={index} task={item.task} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default List;
