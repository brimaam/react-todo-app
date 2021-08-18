import React from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds } from "../reducers/todosSlice"
import { useSelector } from 'react-redux';

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            <ul class="collection">
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
