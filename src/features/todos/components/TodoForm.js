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
        <div className="container inputs">
            {/* <div className="input-group TodoForm border-info" >
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="Input a new todo item"
                    value={text}
                    onChange={handleChange}/>
                <button className="button btn btn-info" onClick={handleAddTodo}>Add</button>
            </div> */}
            <Space direction="vertical">
                <Input
                    className="TodoForm "
                    placeholder="Input a new todo item"
                    type="text" 
                    allowClear
                    enterButton="Add"
                    size="large"
                    value={text}
                    onChange={handleChange}
                />
                <Button className="button btn btn-info" onClick={handleAddTodo} >Add</Button>
            </Space>
        </div>
    )
}

export default TodoForm;