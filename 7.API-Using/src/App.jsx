import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


const Url = "http://localhost:3000"
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(Url + "/users")
    console.log(response.data)
  }
  // Get ile id bilinen kullanıcıyı seçtim 
  const getUsersById = async (userId) => {
    const user = await axios.get(`${Url}/users/${userId}`)
    console.log(user.data)
  }

  // Post ile server ve dosyaya kullanıcı ekle
  const createUser = async (newUser) => {
    const response = await axios.post(`${Url}/users`, newUser)
    console.log(response.data)
  }

  // Put ile var olan kullanıcı bilgilerini güncelle
  const updateUser = (userId, updatedUser) => {
    axios.put(`${Url}/users/${userId}`, updatedUser)
  }

  //Delete ile kullanıcı silme 
  const deleteUserById = async (userId) => {
    const deletedUser = await axios.delete(`${Url}/users/${userId}`)
    console.log(deletedUser.data)
  }

  useEffect(() => {
    getAllUsers()
    getUsersById(2)
    //Ekleme
    const newUser = {
      "userName": "Samet",
      "password": "234567"
    }
    createUser(newUser)
    //Güncelleme
    updateUser("2", {
      "userName": "Hacer Çılgı",
      "password": "56548564"
    })
    //Silme
    deleteUserById("c50a")

  }, [])

  return (
    <>

    </>
  )
}

export default App
