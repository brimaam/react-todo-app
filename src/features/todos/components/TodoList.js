import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoList.css";
import { getTodos } from '../../apis/todo';
import { useDispatch } from 'react-redux';
import { AddTodos } from '../reducers/todosSlice';


function TodoList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) =>{
            dispatch(AddTodos(response.data));
        })
    })
    return (
        <div className="container">
            <div className="card center-align hoverable">
                <h2>To-do List</h2>
                <TodoForm />
                <TodoGroup />
            </div>
        </div>
    );
}

export default TodoList;
