import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee";
import DisplayEmployee from "./pages/DisplayEmployee";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <Routes>
      <Route index element = {<DisplayEmployee/>}/>
      <Route path = 'create-employee' element = {<CreateEmployee/>}/>
    </Routes>
  )
}
export default App