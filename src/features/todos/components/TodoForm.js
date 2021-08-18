import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todosSlice";
import { createTodos } from '../../apis/todo';
import { Input, Space, Button } from 'antd';

 function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAddTodo() {
       text ? 
       createTodos(text).then((response) => {
           dispatch(AddTodo(response.data));
       }) : alert("Please enter a todo!");
        
       setText("");
    }

    return (
        <div className="container ">
            <Space direction="horizontal">
                <Input
                    className="TodoForm inputs"
                    placeholder="Input a new todo item"
                    type="text" 
                    size="large"
                    value={text}
                    onChange={handleChange}
                />
                <Button 
                    type="primary" 
                    className="buttons black-text btn-large waves-effect waves-light blue lighten-3" 
                    onClick={handleAddTodo}><b>Add</b></Button>
            </Space>
        </div>
    )
}

export default TodoForm;