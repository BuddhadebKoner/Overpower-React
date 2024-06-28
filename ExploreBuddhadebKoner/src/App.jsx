import './App.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Alartmess from './Components/Alartmss/Alartmss'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const AlertMessage = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
}
export default function App() {

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

