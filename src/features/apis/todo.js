import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
}

export const createTodos = (text) => {
    return api.post("/todos", {text});
}

export const updateTodos = (id, updateTodo) => {
    return api.put(`/todos/${id}`, updateTodo);
}