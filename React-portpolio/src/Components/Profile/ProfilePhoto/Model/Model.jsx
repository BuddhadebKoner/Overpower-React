import React from 'react'
import './Model.css'
import assets from '../../../../assets/icons/icons'

export default function Model({ onClose }) {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <button className="close-btn" onClick={onClose}>
                        <img className='close-btn-image' src={assets.Close} alt="" />
                    </button>
                    <div className="donate-details-section">
                        <h1>Under Mentenence</h1>
                        <img className='react-gif-image' src={assets.Reactgif} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
