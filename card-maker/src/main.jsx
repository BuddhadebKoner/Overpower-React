import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import CardForm from './components/CardForm/CardForm.jsx'
import Contribute from './components/Contribute/Contribute.jsx'
import MakeCard from './components/MakeCard/MakeCard.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ShowCard from './components/ShowCard/ShowCard.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Layout/>} />
      <Route path='about' element={<About/>} />
      <Route path='cardform' element={<CardForm/>} />
      <Route path='contribute' element={<Contribute/>} />
      <Route path='makecard' element={<MakeCard />} />
      <Route path='navbar' element={<Navbar/>} />
      <Route path='showcard' element={<ShowCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
