import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons";


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function App() {
    const [color, setColor] = useState("57a773");
    const [colorsArray, setColorsArray] = useState([]);

    useEffect(() => {
        const colors = [
            "7ae582", "1a659e", "d62828", "540b0e", "00bbf9",
            "2a9d8f", "9b5de5", "fca311", "52796f", "353535", "1c7293","cbf3f0","718355"
        ];
        setColorsArray(shuffleArray(colors));
    }, []);

    const handleButtonClick = (color) => {
        setColor(color);
    };

    

    return (
        <>
            <div
                className="Main-container w-full h-screen duration-500"
                style={{ backgroundColor: `#${color}` }}
            >
                <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
                        {colorsArray.map((color, index) => (
                            <Buttons key={index} Color={color} setColor={handleButtonClick} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
