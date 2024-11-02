import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './userList'
// npm install @reduxjs/toolkit react-redux bu şekilde projeye dahil etmemiz lazım 
// Daha sonra bir tane redux stora oluşturmak lazım
// bir state değerine erişmek için  useSelector kullanılıe 
function App() {
  const store = useSelector((store) => store.counter)
  const { value } = useSelector((store) => store.counter)
  const { users } = useSelector((store) => store.user)
  console.log(users)
  console.log(store)
  console.log(value)
  const dispatch = useDispatch()

  return (
    <>
      <div>{value}</div>
      <div><button onClick={() => dispatch(increment())}>Arttır</button>  <button onClick={() => dispatch(decrement())}>Azalt</button></div>
      <UserList />
    </>
  )
}

export default App
