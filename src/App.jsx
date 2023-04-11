import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import DropdownMenu from './Components/Test/DropdownMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App  ">
      
      <Navbar></Navbar>
     
      
      <Outlet></Outlet>

     
    </div>
  )
}

export default App
