import React from 'react';
import TodoItem from './TodoItem';
import { selectDoneTodos } from "../reducers/todosSlice";
import { useSelector } from 'react-redux';

function DoneList() {
    const doneTodos = useSelector(selectDoneTodos);
    return (
        <div className="container">
            <div className="card center-align hoverable">
                <h2>Done To-do List</h2>
                {
                    doneTodos.map((doneTodo) => (
                        <TodoItem key={doneTodo.id} todoId={doneTodo.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default DoneList;
