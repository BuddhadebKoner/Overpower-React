import React from 'react'


export default function Buttons({ Color, setColor }) {

    return (
        <>
            <button
                onClick={() => setColor(Color)}
                className="outline-none px-7 py-3 text-white rounded-full shadow-lg"
                style={{ backgroundColor: `#${Color}` }}
            >
            </button>
        </>
    )
}
