import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Component/Header'
import Button from './Component/Button'
import style from './App.module.css'
function App() {
  

  return (

    <div className={style.container}>
      
<Header/>
<Button/>
    </div>
    
  )
}

export default App
