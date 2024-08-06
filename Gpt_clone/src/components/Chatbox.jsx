import React, { useContext, useEffect, useState } from 'react'; // Import useState
import '../styles/Chatbox.css';

import Userresponse from './Userresponce';
import Godresponse from './Godresponce';
import { ChatContext } from '../context/ChatContext';

export default function Components() {
   const { messages } = useContext(ChatContext);
   const [noChat, setNoChat] = useState(false);
   // console.log(messages);
   

   useEffect(() => {
      setNoChat(messages.length === 0);
   }, [messages]);

   return (
      <div className="chatbox_container_section">
         {
            noChat ?
               (<div className="no_chat_text">
                  <p>Not <br />For Beginners</p>
               </div>)
               : (
                  <div className="chats_container">
                     {messages.map((chat, index) => {
                        if (chat.type === 'user') {
                           return <Userresponse key={index} response={chat.response} />;
                        } else if (chat.type === 'god') {
                           return <Godresponse key={index} response={chat.response} />;
                        }
                        return null;
                     })}
                  </div>
               )
         }
      </div>
   );
}
