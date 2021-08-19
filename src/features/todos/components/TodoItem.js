import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, UpdateTodo, DeleteTodo } from "../reducers/todosSlice";
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
                UpdateTodo({id, updateTodo: response.data})
            );
       })
    }

    function handleUpdateText() {
        if(text) {
            updateTodo(id, {text: text}).then((response) => {
                console.log(response.data)
                dispatch(
                    UpdateTodo({id, updateTodo: response.data})
                );
            })
        }
        setIsModalVisible(false);
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
                            className="modalButton" 
                            onClick={handleModal}>
                                <EditOutlined />
                        </Button>
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleModal() {
        setIsModalVisible(true);
    }

    function handleCancel(){
        setText(todo.text);
        setIsModalVisible(false);
    }

    return (
        <li className="collection-item item hoverable animate__animated animate__fadeInUp">
            <div className="row">
                <div className="col s12 m4 l10">
                    <div className={`TodoItem-todo ${todoStatus}`} onClick={handleToggle}>
                        <h5>{todo.text}</h5>
                    </div>
                </div>
                <div className="col s12 m4 l2">
                    <Button type="primary" 
                            className="waves-effect waves-light" 
                            danger onClick={handleDelete}>
                             <DeleteOutlined />
                    </Button>
                    {modalButton}
                    <Modal 
                        title="Update Todo" 
                        visible={isModalVisible}  
                        okText="UPDATE"
                        onOk={handleUpdateText} 
                        onCancel={handleCancel}>
                        <Input
                            className="TodoForm inputModal"
                            placeholder="Input a new todo item"
                            type="text" 
                            size="large"
                            value={text}
                            onChange={handleChange}
                        />
                    </Modal>
                    
                </div>
            </div>
        </li>
    )
}

export default TodoItem;