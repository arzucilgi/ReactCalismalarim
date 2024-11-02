import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize1, setVize1] = useState('')
  const [vize2, setVize2] = useState('')

  const yazdir = () => {
    debugger
    console.log("ortalama:" + ortalambul())
  }
  const ortalambul = () => {
    debugger
    let ortalama = toplam() / 2
    return ortalama
  }

  const toplam = () => {
    debugger
    const toplam = vize1 + vize2
    return toplam
  }

  return (
    <>
      <div> <input type="number" value={vize1} onChange={(e) => { setVize1(Number(e.target.value)) }} /></div>
      <div> <input type="number" value={vize2} onChange={(e) => { setVize2(Number(e.target.value)) }} /></div>
      <div><button onClick={yazdir}>Ortlama bul</button></div>
    </>
  )
}

export default App
