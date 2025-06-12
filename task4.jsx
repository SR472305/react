import React, { createContext, useState } from 'react'
import Task2 from './task3';

export const ThemeContext = createContext();
const Task = ({ Children }) => {
  const [theme, settheme] = useState("light")

  function bgcolor() {
    settheme((prevalue) => prevalue === "light" ? "dark" : "light")
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, bgcolor }}>
         < Task2 />
      </ThemeContext.Provider>

    </div>
  )
}

export default Task
