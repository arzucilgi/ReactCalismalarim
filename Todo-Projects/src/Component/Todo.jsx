import React from 'react'
import { MdDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md"


function Todo({ todos, onRemoveTodo }) {
    return (
        <div>
            <div className='todo-list-container'>
                {todos && todos.map((todo) => (
                    <div key={todo.id} className="todo-list">
                        <div className="added-todo">
                            {todo.content}
                        </div>
                        <div className="icons">
                            <MdOutlineDriveFileRenameOutline />
                            <MdDelete onClick={() => onRemoveTodo(todo.id)} />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Todo
