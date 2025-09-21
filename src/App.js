import React, { useState } from "react";
import DisplayNumber from "./DisplayNumber";
import Task from "./Task";
import ColorBox from "./ColorBox";

function App() {
  // Bài 1
  const [count, setCount] = useState(0);

  // Bài 2
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Bài 3
  const [color, setColor] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Bài 1 */}
      <h3>Bài 1: Ứng dụng Đếm số</h3>
      <DisplayNumber value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      <hr />

      {/* Bài 2 */}
      <h3>Bài 2: Danh sách công việc</h3>
      <input
        type="text"
        value={task}
        placeholder="Nhập công việc"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, index) => (
          <Task key={index} name={t} />
        ))}
      </ul>

      <hr />

      {/* Bài 3 */}
      <h3>Bài 3: Ứng dụng đổi màu nền</h3>
      <div>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("blue")}>blue</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
