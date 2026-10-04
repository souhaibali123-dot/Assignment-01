import { useState, useEffect } from "react";
import "./App.css";

// Task 2: Reusable Component
function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-number">#{task.id}</div>

      <div className="task-info">
        <h3>{task.title}</h3>
        <span>{task.category}</span>
      </div>
    </div>
  );
}

function App() {

  // Task 1: Create and Display Tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      category: "Coding"
    },
    {
      id: 2,
      title: "Prepare Database Notes",
      category: "Study"
    },
    {
      id: 3,
      title: "Submit Project Report",
      category: "Project"
    }
  ]);

  const [newTask, setNewTask] = useState("");

  // Task 4: useEffect
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  // Task 3: Add New Task
  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: tasks.length + 1,
      title: newTask,
      category: "Campus"
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <div className="page">

      <div className="board">

        <header>
          <p className="label">STUDENT TASK BOARD</p>

          <h1>Campus Command Center</h1>

          <p className="subtitle">
            Manage your campus tasks easily.
          </p>

          <div className="counter">
            <b>{tasks.length}</b>
            <span>Total Tasks</span>
          </div>
        </header>

        {/* Task 3: Input and Button */}
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new campus task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button onClick={addTask}>
            + Add Task
          </button>
        </div>

        <h2>My Tasks</h2>

        {/* Task 1: Display using map() */}
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;