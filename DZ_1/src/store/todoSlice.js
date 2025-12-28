import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                done: false,
            });
        },

        toggleTodo(state, action) {
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === action.payload) {
                    state.todos[i].done = !state.todos[i].done;
                }
            }
        },

        deleteTodo(state, action) {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            );
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
