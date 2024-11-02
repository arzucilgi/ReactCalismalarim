import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//bir fonksiyonu bir fonksiyona parametre geçiren fonksiyonlara callback denir 

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // useEffect(() => {
  //   console.log("Her zaman çalışır. Yani bir butona bastın diyelim bastığın button sadece bir şeyi ilgilendirmesine rağmen")
  //   console.log("basmadığım tuşarın aksiyonu da çalışır.Ne yaparsan yap bunun içindekiler  çalışacak")
  // })

  useEffect(() => {
    console.log("İlk render edildiği zaman çalışır ")
  }, [])

  useEffect(() => {
    console.log("İlk render edildiğinde ve Firstname ilk değiştiği zaman çalışır")
  }, [firstName])

  useEffect(() => {
    console.log("İlk render edildiğinde ve Firstname ile lastname değiştiği zaman çalışır")
  }, [firstName], [lastName])

  useEffect(() => {
    console.log("İlk render edildiği ve Lastname ilk değiştiği zaman çalışır")
  }, [lastName])

  return (
    <>
      <div> <button onClick={() => setFirstName("Arzu")}> Adı değiştir </button></div>
      <div> <button onClick={() => setLastName("Çılgı")}>Soyismi değiştir </button></div>
    </>
  )
}

export default App
