import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask: Task = {
        id: new Date().getTime(),
        text: inputValue.trim(),
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleToggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start", // center items vertically
        alignItems: "center", // center items horizontally
        margin: 30,
      }}
    >
      <h1 style={{ fontFamily: "Arial" }}>KERJA NAK BUAT</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Masukkan Tugas"
          style={{ width: "200px", height: "50px" }}
        />
        <button
          style={{
            margin: 10,
            color: "white",
            backgroundColor: "green",
            border: "green",
            padding: 5,
          }}
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              style={{ margin: 10 }}
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span
              style={task.completed ? { textDecoration: "line-through" } : {}}
            >
              {task.text}
            </span>
            <button
              style={{
                margin: 10,
                color: "white",
                backgroundColor: "red",
                border: "green",
                padding: 5,
              }}
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
