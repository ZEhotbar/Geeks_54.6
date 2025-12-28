import { useState } from "react";
import { useTodoStore } from "./store/useTodoStore";
import "./App.css"

function App() {
  const [text, setText] = useState("");

  const todos = useTodoStore(state => state.todos);
  const addTodo = useTodoStore(state => state.addTodo);
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <div className="main_todo">
      <h2>Zustand Todo</h2>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={() => addTodo(text)}>
        Добавить
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
