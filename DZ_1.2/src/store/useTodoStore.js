import { create } from "zustand";

export const useTodoStore = create(set => ({
    todos: [],

    addTodo(text) {
        set(state => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text: text, done: false },
            ],
        }));
    },

    toggleTodo(id) {
        set(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            }),
        }));
    },

    deleteTodo(id) {
        set(state => ({
            todos: state.todos.filter(todo => todo.id !== id),
        }));
    },
}));
