import { useState, useEffect } from "react";

// dynamic table columns implementation with sorting column functionality
const Table = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getTodos = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const allTodos = await getTodos.json();
      setTodos(allTodos);
    };
    fetchData();
  }, []);
  return (
    <>
      {todos.length > 0 && (
        <table>
          <tbody>
            <ColumnHeader columnsData={Object.keys(todos?.[0])} />
            {todos.map((todo, index) => (
              <TableRow index={index} todo={todo}></TableRow>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

const ColumnHeader = ({ columnsData }) => {
  return (
    <tr>
      {columnsData.map((column, index) => (
        <th key={index}>{column}</th>
      ))}
    </tr>
  );
};

const TableRow = ({ index, todo }) => {
  const keys = Object.keys(todo);
  return (
    <tr>
      {keys.map((key, index) => (
        <td key={index}>{todo[key]}</td>
      ))}
    </tr>
  );
};

export default Table;
