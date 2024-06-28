import React from 'react';
import Lottie from 'react-lottie-player';
import Loading from '../animations/Loading.json';

export default function LoadingComponent() {
    return (
        <div className="Loading-container">
            <Lottie
                loop 
                animationData={Loading} 
                play 
                style={{ width: 500, height: 500 }}
            />
        </div>
    );
}
