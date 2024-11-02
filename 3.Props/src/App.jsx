import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yeni from './Yeni'
import Container from './Container'

function App() {
  const productName = "ayakkabı"

  return (
    <>
      <Container >
        <Yeni productName="Telefon" price={10000} />
      </Container >
      <Yeni productName="Canta" price={3000} />
      <Yeni productName={productName} price={3000} />
    </>
  )
}
export default App
