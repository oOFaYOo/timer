import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import MainFile from './mainFile'

function App() {
  return (
   <Routes>
     <Route path={'/'} element={<Navigate to={"/main_page_of_timer"}/>} />
     <Route path={'/main_page_of_timer'} element={<MainFile />} />
   </Routes>
  );
}

export default App;
