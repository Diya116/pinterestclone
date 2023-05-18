import React from 'react'
import { createContext, useState } from 'react'
 export const Save=createContext()


function Contextapi({children}) {
  const[save,setSave]=useState([]);
  return (
    <Save.Provider value={{save,setSave}}>
        {children}
    </Save.Provider>
  )
}

export default Contextapi
