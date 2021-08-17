import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoList.css";


function TodoList() {
    return (
        <div className="container ">
            <div className="card mx-auto ">
                <h1>To-do List</h1>
                <TodoGroup />
                <TodoForm />
            </div>
        </div>
    );
}

export default TodoList;
