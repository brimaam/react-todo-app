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
        <div className="container ">
            <div className="card mx-auto ">
                <h1 className="text-center mx-auto">To-do List</h1>
                <TodoGroup />
                <TodoForm />
            </div>
        </div>
    );
}

export default TodoList;
