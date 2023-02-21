import React from 'react'
import { Route, Routes } from "react-router-dom";
import Achievement from './Achievement';
import Form from './Form';
import Homepage from './Homepage';
const AllRouters = () => {
  return (
    <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/achievement" element={<Achievement/>}/>
         <Route path="/form" element={<Form/>}/>
    </Routes>
  )
}
export default AllRouters