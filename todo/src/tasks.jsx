function Tasks({ todo, deleteTask }) {
  return (
    <div>
      {todo.map((task, index) => (
        <div key={index} className="Tasks">
          <div className="taskmain">{task}</div>
          <button onClick={() => deleteTask(index)} className="delete">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
