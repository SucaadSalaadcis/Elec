import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import Electronics from './pages/ElectronicsUsingReactslick';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterElec from './pages/RegisterElec';



function App() {
  return (
    <div>
      <RegisterElec/>
      <Routes>
        <Route path='/' element={<Electronics/>} />
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App