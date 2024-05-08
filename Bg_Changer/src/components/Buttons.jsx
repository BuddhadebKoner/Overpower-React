import React from 'react'


export default function Buttons({ Color, setColor }) {

    return (
        <>
            <button
                onMouseEnter={() => setColor(Color)}
                className="outline-none h-10 w-20 px-7 py-3 text-white rounded-full shadow-lg"
                style={{ backgroundColor: `#${Color}` }}
            >
            </button>
        </>
    )
}
