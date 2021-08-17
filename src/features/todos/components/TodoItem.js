import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.todoId));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    function handleClick() {
        dispatch(ToggleTodo(props.todoId));
    }

    function handleDelete() {
        dispatch(DeleteTodo(props.todoId));
    }

    return (
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            {todo.text}
            <button className="" onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem;
