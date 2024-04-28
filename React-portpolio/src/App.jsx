import './App.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Alartmess from './Components/Alartmss/Alartmss'
import { Outlet } from 'react-router-dom'


const AlertMessage = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
}
export default function App() {

  
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    <Alartmess/>
    </>
  )
}

