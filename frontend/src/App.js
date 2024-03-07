import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee";
import DisplayEmployee from "./pages/DisplayEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import {Routes, Route} from 'react-router-dom';
import SearchEmployee from "./pages/SearchEmployee";
import Registration from "./pages/Registration";

const App = () => {
  return(
    <Routes>
      <Route index element = {<DisplayEmployee/>}/>
      <Route path = 'create-employee' element = {<CreateEmployee/>}/>
      <Route path = 'update-employee' element = {<UpdateEmployee/>}/>
      <Route path = 'search-employee' element = {<SearchEmployee/>}/>
      <Route path= 'registration-employee' element ={<Registration/>}/>
    </Routes>
  )
}
export default App