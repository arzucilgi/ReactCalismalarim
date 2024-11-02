import { useState } from 'react' // bir use state import edilmesidir 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
-
  /* //? useState,useEffect,useMemo,useRef=hooks
      
   */
  /* //!ÇOK ÖNEMLİ BİR BİLGİ 
   1) bir değişken oluşturup bu değişkene bir değer atamsı yapan işleme(declaration) useState denir.
  Bir useState in değerini içinde tanımladığımız set fonksiyonu ile değiştirirsek içinde bulunduğumuz component her bu 
  fonksiyon çalıştığında tekrar  bütün compenentin içinde bulunan kodlar çalışır
  2) Bir sayfa yüklendiğinde bir compenet içinde bir olay olduğunda vs gibi olaylarda useEffect kulllanılır.
   */


  function App() {
    /* use state nasıl tanımlanır şimdi onu yapcaz */
    const [firstName, setFirstName] = useState("Arzu")
    const [lastName, setLastName] = useState('Çılgı')
    //useState parnatezleri arasına yazdığım ilk yazdığım değerin başlangiç değeridir Yani firstname başlangıç değeri Arzu dur
    const [names, setNames] = useState(["Arzu", "Samet", "Elif", "Hacer"])
    const [show, setShow] = useState(false)
    const [obje, setObje] = useState({ userName: "Hacer", password: "1234" })
    const [count, setCount] = useState(0)

    const arttir = () => {
      setCount(count + 1)// burda count her arttığında console.log her seferinde artıyor çünkü app en baştan çalışıyor Sistemi çok yavaşlatır
    }


    console.log("component çalıştı ")
    return (
      <>
        <div>{firstName} {lastName}</div>
        <div><button onClick={() => { setFirstName("Arzunur") }}>Change Name</button></div>
        {
          names.map((name, index) => (
            <div key={index}>{name} </div>
          ))
        }
        {show ? <div>{obje.userName} {obje.password}</div> : <div> bilgileri gösterme </div>}
        <div>{count}</div>
        <div> <button onClick={arttir}>Arttır</button></div>


      </>
    )
  }

export default App
