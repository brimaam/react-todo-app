import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1","2","3"],
    entities: {
        1:{
            id: "1",
            text: "Testing todo",
            done: false,
        },
        2:{
            id: "2",
            text: "2nd Testing todo",
            done: false,
        },
        3:{
            id: "3",
            text: "3rd Testing todo",
            done: false,
        }
    }
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
})

export default todosSlice.reducer;

export const { selectIds: selectTodoIds, selectById: selectTodoById } = 
todosAdapter.getSelectors((state) => state.todoList);