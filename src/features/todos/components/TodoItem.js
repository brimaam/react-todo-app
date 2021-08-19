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
                            className="secondary-content" 
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
        <li className="collection-item item hoverable">
            <div class="row">
                <div class="col s12">
                    <div className={`TodoItem-todo ${todoStatus}`} onClick={handleToggle}>
                        <h5>{todo.text}
                        <Button type="primary" 
                            className="secondary-content waves-effect waves-light" 
                            danger onClick={handleDelete}>
                                <DeleteOutlined />
                        </Button>
                        </h5>
                    </div>
                </div>
                <div class="col s12">
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
                    {modalButton}
                </div>
            </div>
        </li>
    )
}

export default TodoItem;