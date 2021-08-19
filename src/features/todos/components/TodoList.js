import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoList.css";


function TodoList() {
   
    return (
        <div className="container">
            <div className="card center-align hoverable">
                <h2 className="title animate__animated animate__heartBeat">To-do List</h2>
                <TodoForm />
                <TodoGroup />
            </div>
        </div>
    );
}

export default TodoList;
