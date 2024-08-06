import React from 'react';
import '../styles/chatoutput.css';

export default function components({ response }) {
   

   return (

      <>
         <div className="user_chat_container chat_container">
            <div className="user_prompt prompt">
               <p>{ response }</p>
            </div>
         </div>
      </>

   )

}