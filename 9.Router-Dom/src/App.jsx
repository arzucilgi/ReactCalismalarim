import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFoundPages from './pages/notFoundPages'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Header from './components/Header'
import Employee from './pages/Employee'
import Company from './pages/Company'
import ProductDetails from './pages/ProductDetails'


//GELEN URL E GÖRE İÇERDE HANGİ COMPENENTİN RENDER EDİLECEĞİNE KARAR VEREN YAPIYA ROUTER-DOM DENİR 
//PROJEYE DAHİL EDİLEBİLMESİ İÇİN 

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} >
          <Route path='employee' element={<Employee />} />
          <Route path='company' element={<Company />} />
        </Route>
        <Route path='/product' element={<Product />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>

    </>
  )
}

export default App
