import Todo from "./Todo";

const Todolist = ({ inputText, todo, setTodo, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <Todo key={item.id} item={item} setTodo={setTodo} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
