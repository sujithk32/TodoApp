function TaskGroup({ task, addTask, addTodo }) {
  return (
    <div className="taskgroup">
      <input
        onChange={addTask}
        type="text"
        placeholder="Enter task here"
        value={task}
      ></input>
      <button onClick={addTodo} className="addtask">
        Add Task
      </button>
    </div>
  );
}
export default TaskGroup;
