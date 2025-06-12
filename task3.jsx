import React, { useContext } from 'react'
import { ThemeContext } from './task4'

const Task2 = () => {
 let {theme , bgcolor} = useContext(ThemeContext)

 
  return (
    <div style={{background : theme === "light" ? "white" : "black", height : "100vh" ,width : "100%"}}  >

      <button onClick={bgcolor} style={{color : theme === "light" ? "black" : "white",  background : "gray"}}>click me</button>
      
    </div>
  )
}

export default Task2
