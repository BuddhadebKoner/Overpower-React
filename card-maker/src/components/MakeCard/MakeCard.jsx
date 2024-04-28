import React from 'react'
import './MakeCard.css'
import Navbar from '../Navbar/Navbar'
import CardForm from '../CardForm/CardForm'
import { Outlet } from 'react-router-dom'

export default function MakeCard() {
    return (
        <>
            <div className="card-container">
                <Navbar />
                <Outlet/>
            </div>
        </>
    )
}
