import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList'
import Todo from './Component/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const craeteTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }
  console.log(todos)

  const removeTodo = (todoID) => {
    setTodos([...todos.filter((todo) => todo.id !== todoID)])
  }
  return (
    <div className='container'>
      <TodoList onCreateTodo={craeteTodo} />
      <Todo todos={todos} onRemoveTodo={removeTodo} />
    </div>
  )
}

export default App
