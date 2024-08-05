import React, { createContext, useState } from 'react'

 export const addProjectResponseContext= createContext()
 export const editProjectResponseContext= createContext()

function ContextShare({children}) {
  

    const [addProjectResponse,setAddProjectResponse] =useState({})
    const [editdProjectResponse,setEditProjectResponse] =useState({})


  return (
    <>
    <addProjectResponseContext.Provider value ={{addProjectResponse,setAddProjectResponse}}>
    <editProjectResponseContext.Provider value ={{editdProjectResponse,setEditProjectResponse}}>

    {children}
    </editProjectResponseContext.Provider>
   
    </addProjectResponseContext.Provider>
   
    </>
  )
}

export default ContextShare