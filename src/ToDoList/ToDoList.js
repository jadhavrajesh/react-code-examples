import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

const initialState = { id: Date.now(), value: "", checked: false };

function TodoForm() {
  const [todo, setTodo] = useState(initialState);
  const [todos, setTodos] = useState([]);

  const handleOnChange = (e) => {
    setTodo({
      id: Date.now(),
      value: e.target.value,
      checked: false,
    });
  };

  const handleClick = () => {
    const allTodos = todos;
    allTodos.push(todo);
    setTodos(allTodos);
    setTodo(initialState);
  };

  const updateAllTodos = (todosToUpdate) => {
    setTodos(todosToUpdate);
  };

  return (
    <>
      <input type="text" value={todo?.value} onChange={handleOnChange} />
      <button onClick={handleClick}>Submit</button>

      <TodoList items={todos} updateAllTodos={updateAllTodos} />
    </>
  );
}

function TodoList({ items, updateAllTodos }) {
  console.log("TodoList rendered");
  const handleCheck = (id, e) => {
    console.log("handleCheck called ");
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    updateAllTodos(newItems);
  };
  return (
    <>
      <h1>To-dos</h1>
      <div>
        {items.map((item, index) => {
          return (
            <div key={item?.id}>
              <input
                type="checkbox"
                onChange={(e) => handleCheck(item.id, e)}
                checked={item.checked}
              />
              <p className={item?.checked ? "strike" : ""}>{item.value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
