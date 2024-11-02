import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './testComponent'

function App() {
  //javascript kodlarını buraya yaz 
  let a = 15
  let sonuc = false
  let vize1 = 60
  let vize2 = 80
  let isimler = [
    "arzu",
    "hacer",
    "samet",
    "hatice"
  ]

  return (
    //html kodlarını buraya yaz 
    <div>
      <p> a değeri:{a}</p>
      {sonuc ? <p>Ehlit var</p> : <p>Ehliyet yok</p>}
      {
        (vize1 + vize2) / 2 >= 50 ? <p>geçtin</p> : <p>Kaldın</p>
      }
      {
        isimler.map((isim, index) => (
          <div style={{ backgroundColor: 'orange', border: '1px solid black' }} key={index}>{isim}</div>
        ))
      }
      <TestComponent />
    </div>

  )
}

export default App
