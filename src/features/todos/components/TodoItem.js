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
        <div className="container item border-info  my-3 position-relative">
            <div className={` mx-auto TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <h5 className="d-inline">{todo.text}</h5>
                <button className="d-inline  TodoItem-button  btn btn-danger btn-sm position-absolute top-50 start-100 translate-middle"
                    onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default TodoItem;
