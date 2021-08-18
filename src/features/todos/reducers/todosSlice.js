import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1:{
            id: "1",
            text: "Testing todo",
            done: false,
        }
    }
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            // todosAdapter.addOne(state, {
            //     id: uuid(),
            //     text: action.payload,
            //     done: false
            // });
            // return state;
            todosAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action){
            todosAdapter.removeOne(state, action.payload); 
        },
        AddTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        }
    },
})

export const { AddTodo, ToggleTodo, DeleteTodo, AddTodos } = todosSlice.actions;

export default todosSlice.reducer;

export const { 
    selectAll : selectAllTodos,
    selectIds: selectTodoIds,
    selectById: selectTodoById 
} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneTodos = createSelector([selectAllTodos], (todos) => todos.filter((todo) => todo.done));

