import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet, NavLink } from 'react-router-dom'
import DropdownMenu from './Components/Test/DropdownMenu'
import {
  // existing code
  useNavigation,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  useEffect(()=>{
    window.scroll(0,0);
},[])


  return (
    <div className="App  ">
      
      <Navbar></Navbar>
      
      <div className={
          navigation.state === "loading" ? "loader" : ""
        }>
      
      </div>
      

      <Outlet></Outlet>

     
    </div>
  )
}

export default App
