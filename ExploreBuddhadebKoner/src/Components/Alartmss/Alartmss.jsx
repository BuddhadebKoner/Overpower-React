import React, { useState } from 'react';
import '../../Styles/Alartmss.css'




export default function App() {
    const [showModal, setShowModal] = useState(true);

    const handleYesClick = () => {
        setShowModal(false);
        // Handle Yes action here
    };
    return (
        <>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Please open in desktop or enable desktop mode otherwise you will not see the features. This website is not responsive.</p>
                        <div className="modal-buttons">
                            <button onClick={handleYesClick}>Ok</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

