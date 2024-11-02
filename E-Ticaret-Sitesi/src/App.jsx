import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import PageConatiner from './container/PageConatiner'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <>

      <PageConatiner>
        <Header />
        <RouterConfig />
      </PageConatiner>

    </>
  )
}

export default App
