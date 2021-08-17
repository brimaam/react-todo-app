import React from 'react'
import { useSelector } from 'react-redux';

// import { initialTodoList } from "../../../common/constants/constants";
// import { getTodoById } from "../../../common/utils/utils";
import { selectTodoById } from "../reducers/todosSlice"

function TodoItem(props) {
    // const todo = getTodoById(initialTodoList, props.todoId);
    const todo = useSelector(state => selectTodoById(state, props.todoId))
    return (
        <div>
            {todo.text}
        </div>
    )
}

export default TodoItem;
