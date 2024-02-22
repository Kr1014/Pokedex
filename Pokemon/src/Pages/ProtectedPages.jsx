import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedPages = () => {

   const trainerName = useSelector((store)=> store.trainerName)

    if(trainerName.length>2){
       return <Outlet/>
    }
    else{
       return <Navigate to={"/"}/>
    }
 
}

export default ProtectedPages