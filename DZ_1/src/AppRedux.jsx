import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./store/todoSlice";

function AppRedux() {
    const [text, setText] = useState("");
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Todo на Redux</h2>

            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <button
                onClick={() => {
                    dispatch(addTodo(text));
                    setText("");
                }}
            >
                Добавить
            </button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            style={{
                                textDecoration: todo.done ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppRedux;
