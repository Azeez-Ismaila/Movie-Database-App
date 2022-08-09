const Todo = ({ todo, setTodo, item }) => {
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== item.id));
  };
  const completeHandler = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : "none"}`}>
        {item.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
