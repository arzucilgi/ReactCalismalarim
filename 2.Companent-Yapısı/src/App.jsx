import { useState } from 'react'// burdakiifadeler aşağıda henüz kullanılmadığında 
//bu şekilde bulanık gözüküyor 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { users } from './Login'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Hello ben geldimmm</p>
      <Login />
      <hr />
      <Login />
      <hr />
      {
        users.map((user) => (
          <div key={user.id} style={{ backgroundColor: 'orange', border: '1px solid black', margin: '5px', padding: '10px' }}>
            <p>Username: {user.username}</p>
            <p>ID: {user.id}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
