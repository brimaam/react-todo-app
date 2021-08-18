import React from 'react';
import TodoItem from './TodoItem';
import { selectDoneTodos } from "../reducers/todosSlice";
import { useSelector } from 'react-redux';

function DoneList() {
    const doneTodos = useSelector(selectDoneTodos);
    return (
        <div className="container">
            <div className="card mx-auto position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center mx-auto">Done To-do List</h1>
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
