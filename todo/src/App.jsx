import TaskGroup from "./taskgroup";
import Tasks from "./tasks";
import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  function addTask(e) {
    setTask(e.target.value);
  }
  function addTodo() {
    if (task.trim()) {
      setTodo([...todo, task]);
      setTask("");
    }
  }
  function deleteTask(index) {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  }
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TaskGroup task={task} addTask={addTask} addTodo={addTodo} />
      <Tasks todo={todo} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
