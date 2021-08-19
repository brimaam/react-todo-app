import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { Input, Button, Modal } from 'antd';
import { deleteTodo, updateTodo } from '../../apis/todo';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function TodoItem(props) {
    const id = props.todoId;
    const todo = useSelector(state => selectTodoById(state, id));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    const [text, setText] = useState(todo.text);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleToggle() {
       updateTodo(id, {done: !todo.done}).then((response) => {
            dispatch(
               ToggleTodo({id, updateTodo: response.data})
            );
       })
    }

    function handleDelete(event) {
        event.stopPropagation();
        deleteTodo(id).then(() => {
            dispatch(DeleteTodo(id));
        });
    }

    var modalButton;
    if(todoStatus === ""){
        modalButton = <Button type="primary" 
                            className="secondary-content" 
                            onClick={handleModal}>
                                <EditOutlined />
                        </Button>
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleUpdateText() {
        updateTodo(id, {text: text}).then((response) => {
            console.log(response.data)
            dispatch(
                ToggleTodo({id, updateTodo: response.data})
            );
        })
        setIsModalVisible(false);
    }

    function handleModal() {
        setIsModalVisible(true);
    }

    function handleCancel(){
        setText(todo.text);
        setIsModalVisible(false);
    }

    return (
        <li className="collection-item item hoverable">
            <div className={`TodoItem-todo ${todoStatus}`} onClick={handleToggle}>
                <h5>{todo.text}

                <Modal 
                    title="Basic Modal" 
                    visible={isModalVisible}  
                    okText="UPDATE Todo"
                    onOk={handleUpdateText} 
                    onCancel={handleCancel}>
                    <Input
                        className="TodoForm"
                        placeholder="Input a new todo item"
                        type="text" 
                        size="large"
                        value={text}
                        onChange={handleChange}
                    />
                </Modal>

                <Button type="primary" 
                    className="secondary-content waves-effect waves-light" 
                    danger onClick={handleDelete}>
                        <DeleteOutlined />
                </Button>
                    {modalButton}
                </h5>
            </div>
        </li>
    )
}

export default TodoItem;