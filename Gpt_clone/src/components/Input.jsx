import React, { useContext } from 'react';
import '../styles/Chatbox.css';
import data from '../assets/data';
import { ChatContext } from '../context/ChatContext';

export default function Input() {
   const { inputValue, setInputValue, sendApiRequest, isBtnActive } = useContext(ChatContext);

   // Function to handle button click
   const handleClick = () => {
      if (inputValue.trim()) {
         // console.log(inputValue.trim());
         sendApiRequest(inputValue.trim());
         setInputValue('');
      }
   };
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         handleClick();
      }
   };


   return (
      <div className="input_section_container">
         <input
            type="text"
            placeholder="What's on your mind"
            className='input_prompt'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
         />
         <button
            type="button"
            className='prompt_submit'
            onClick={handleClick}
            disabled={!isBtnActive}
         >
            {
               !isBtnActive ? "" : <img src={data.uparrow} alt="Send" />
            }

         </button>
      </div>
   );
}
