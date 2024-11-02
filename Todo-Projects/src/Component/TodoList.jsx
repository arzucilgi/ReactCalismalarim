import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

function TodoList({ onCreateTodo }) {
    const [newtodo, setNewTodo] = useState('')
    const craeteTodo = () => {
        if (!newtodo) return
        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newtodo
        }
        onCreateTodo(request)
        setNewTodo(' ')
    }
    return (
        <div>

            <div className="header">
                <h2>YAPILACAK LİSTEM</h2>
            </div>
            <div className="add-todo">
                <input value={newtodo} onChange={(e) => { setNewTodo(e.target.value) }} type="text" id='input' />
            </div>
            <div className="add-todo-button">
                <button onClick={craeteTodo} id='add-button'>Yapılacak Ekle</button>

            </div>


        </div>
    )
}

export default TodoList