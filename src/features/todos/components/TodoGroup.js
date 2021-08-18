import React from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds } from "../reducers/todosSlice"
import { useSelector } from 'react-redux';
import "../styles/TodoList.css";

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            <ul className="collection blue lighten-3 list">
                {
                    todoIds.map((id) => (
                        <TodoItem key={id} todoId={id} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoGroup;
