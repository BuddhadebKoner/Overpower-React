import React from 'react';

export default function Input({}) {
  return (
    <>
      <div className="input-container bg-primary-light text-text-color w-[20rem] h-[85%] rounded-[1.5em]">
        <div className="excanger-head w-[100%] h-[45%] bg-primary-light rounded-[1.5em] drop-shadow-lg p-3 flex justify-start items-center">
          <select
            className="rounded-lg p-1 cursor-pointer outline-none text-2xl font-bold bg-transparent w-[100%]"
            // disabled={currencyDisable}
          >
                <option key={"usd"} value={"usd"}>{"usd"}</option>
          </select>
        </div>
        <div className="w-[100%] h-[55%] flex items-center justify-start rounded-[1.5em] pl-4 ">
          <input
            className='w-[90%] h-[70%] bg-transparent text-text-color font-bold text-3xl outline-none'
            // disabled={IsActiveInput}
            // type="number"
            placeholder="10"
            // maxLength={4} 
            />
        </div>
      </div>
    </>
  );
}
