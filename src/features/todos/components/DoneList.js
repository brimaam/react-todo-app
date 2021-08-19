import React from 'react';
import TodoItem from './TodoItem';
import { selectDoneTodos } from "../reducers/todosSlice";
import { useSelector } from 'react-redux';
import "../styles/TodoList.css";

function DoneList() {
    const doneTodos = useSelector(selectDoneTodos);
    var done;

    if(doneTodos.length === 0){
        done = <h5 className="title animate__animated animate__rotateIn" >Nothing Done Yet!</h5>
    } else {
        done = doneTodos.map((doneTodo) => (
            <TodoItem key={doneTodo.id} todoId={doneTodo.id} />
        ))
    }

    return (
        <div className="container">
            <div className="card center-align hoverable">
                <h2 className="title" >Done To-do List</h2>
                <ul className="collection blue lighten-3 list">
                    {done}
                </ul>
            </div>
        </div>
    )
}

export default DoneList;
