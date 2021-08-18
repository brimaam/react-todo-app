import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { Button } from 'antd';
import { deleteTodo, updateTodo } from '../../apis/todo';

function TodoItem(props) {
    const id = props.todoId;
    const todo = useSelector(state => selectTodoById(state, id));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    function handleToggle() {
       updateTodo(id, {done: !todo.done}).then((response) => {
            dispatch(
               ToggleTodo({id, updateTodo: response.data})
            );
       })
    }

    function handleDelete(event) {
        event.stopPropagation();
        deleteTodo(id).then(() => {
            dispatch(DeleteTodo(id));
        });
    }

    return (
        <li className="collection-item item ">
            <div className={`TodoItem-todo ${todoStatus}`} onClick={handleToggle}>
                <h5>{todo.text}
                <Button type="primary" className="secondary-content" danger onClick={handleDelete}>X</Button>
                </h5>
            </div>
        </li>
    )
}

export default TodoItem;


/* <button className="d-inline  TodoItem-button  btn btn-danger btn-sm position-absolute top-50 start-100 translate-middle"
                    onClick={handleDelete}>X</button> */