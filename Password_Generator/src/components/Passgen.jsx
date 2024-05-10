import React, { useState, useCallback, useEffect, useRef } from 'react'

export default function Passgen() {

    const [length, setLength] = useState(12)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [charAllowed, setCharAllowed] = useState(true)
    const [upperCase, setUpperCase] = useState(true)
    const [lowerCase, setLowerCase] = useState(true)
    const [Password, setPassword] = useState('')

    const passwordRerf = useRef(null)



    const PasswordGenerator = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"



        if (upperCase && lowerCase) {
            str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        } else {
            if (upperCase) {
                str = str.toUpperCase()
            }
            if (lowerCase) {
                str = str.toLowerCase()
            }
        }
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+{"


        let pass = "";
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToclip = useCallback(() => {
        passwordRerf.current?.select()
        window.navigator.clipboard.writeText(Password)
    }, [Password])

    useEffect(() => {
        PasswordGenerator()
    }, [length, numberAllowed, charAllowed, upperCase, lowerCase, PasswordGenerator])

    return (
        <>
            <div className='w-full h-full bg-pass-gen-bg rounded-b-[2rem] p-[2rem] flex flex-col gap-[25px]'>
                <div
                    className='flex justify-between items-center'
                >
                    <input
                        value={Password}
                        type="text"
                        className="
                    outline-none py-1 px-3 w-[400px] h-[45px] rounded-[1rem] drop-shadow-lg ... bg-primary-light-color cursor-pointer text-[20px]"
                        placeholder="number"
                        readOnly
                        ref={passwordRerf}
                    />
                    <button
                        onClick={copyPasswordToclip}
                        className='w-fit h-[45px] rounded-[10px] cursor-pointer bg-primary-light-color drop-shadow-lg ... flex items-center justify-center gap-3 p-6 hover:bg-gray-100 transition-all duration-300 ease-in-out'
                    >
                        <img src="copy.svg" alt="" />
                        <p>copy</p>
                    </button>
                </div>


                <div className="range">
                    <p
                        className='text-text-color text-[1.5rem] mb-2 cursor-pointer'
                    >Password Length : {length}</p>
                    <input type="range"
                        onChange={(e) => { setLength(e.target.value) }}
                        value={length}
                        id='customRange'
                        min={7}
                        max={35} />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">

                    <div className='text-text-color text-[1.5rem] items-center flex justify-between w-full h-full'>

                        <label htmlFor="cheap-49-upper">
                            <h1 className='
                        cursor-pointer
                        '>Uppercse</h1>
                        </label>

                        <div className="checkbox-wrapper-49">
                            <div className="block">
                                <input data-index="0" id="cheap-49-upper" type="checkbox"
                                    defaultChecked={upperCase}
                                    onChange={() => {
                                        setUpperCase(prev => !prev);
                                    }}
                                />
                                <label htmlFor="cheap-49-upper"></label>
                            </div>
                        </div>

                    </div>

                    <div className='text-text-color text-[1.5rem] items-center flex justify-between w-full h-full'>

                        <label htmlFor="cheap-49-lower">
                            <h1 className='
                        cursor-pointer
                        '>Lowercase</h1>
                        </label>

                        <div className="checkbox-wrapper-49">
                            <div className="block">
                                <input data-index="1" id="cheap-49-lower" type="checkbox"
                                    defaultChecked={lowerCase}
                                    onChange={() => {
                                        setLowerCase(prev => !prev);
                                    }}
                                />
                                <label htmlFor="cheap-49-lower"></label>
                            </div>
                        </div>

                    </div>
                    <div className='text-text-color text-[1.5rem] items-center flex justify-between w-full h-full'>
                        <label htmlFor="cheap-49-numbers">
                            <h1 className='
                        cursor-pointer
                        '>Numbers</h1>
                        </label>

                        <div className="checkbox-wrapper-49">
                            <div className="block">
                                <input data-index="2" id="cheap-49-numbers" type="checkbox"
                                    defaultChecked={numberAllowed}
                                    onChange={() => {
                                        setNumberAllowed(prev => !prev);
                                    }}
                                />
                                <label htmlFor="cheap-49-numbers"></label>
                            </div>
                        </div>

                    </div>
                    <div className='text-text-color text-[1.5rem] items-center flex justify-between w-full h-full'>

                        <label htmlFor="cheap-49-capital-special">
                            <h1
                                className='cursor-pointer'
                            >Special Character</h1>
                        </label>

                        <div className="checkbox-wrapper-49">
                            <div className="block">
                                <input data-index="3" id="cheap-49-capital-special" type="checkbox"
                                    defaultChecked={numberAllowed}
                                    onChange={() => {
                                        setCharAllowed(prev => !prev);
                                    }} />
                                <label htmlFor="cheap-49-capital-special"></label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

