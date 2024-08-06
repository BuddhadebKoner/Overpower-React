import React from 'react';
import data from '../assets/data';
import '../styles/Chatbox.css';

export default function Components({ response }) {
   // Split the response into sections based on headers (e.g., **Special Theory of Relativity**)

   const sections = response.split(/\*\*|\*\*/).filter(Boolean);

   return (
      <div className="god_chat_container chat_container">
         <div className="god_prompt prompt">
            <div className="god_avatar avatar">
               <img src={data.user} alt="God" />
               <p>God</p>
            </div>
            <div className="response_content">
               {sections.map((section, index) => {
                  const isHeader = index % 2 === 0; 
                  const content = isHeader ? (
                     <h3 key={index} className="section_header">{section}</h3>
                  ) : (
                     <p key={index} className="section_content">{section}</p>
                  );
                  return content;
               })}
            </div>
         </div>
      </div>
   );
}
