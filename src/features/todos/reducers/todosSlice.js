import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [],
    entities: {}
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },
        UpdateTodo(state, action) {
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
        },
        DeleteTodo(state, action) {
            todosAdapter.removeOne(state, action.payload); 
        },
        AddTodos(state, action) {
            todosAdapter.addMany(state, action.payload);
        }
    },
})

export const { AddTodo, UpdateTodo, DeleteTodo, AddTodos } = todosSlice.actions;

export default todosSlice.reducer;

export const { 
    selectAll : selectAllTodos,
    selectIds: selectTodoIds,
    selectById: selectTodoById 
} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneTodos = createSelector([selectAllTodos], (todos) => todos.filter((todo) => todo.done));

