import React, { createContext, useState } from "react";
import axios from "axios";

// Create Context
const ChatContext = createContext();

// Provider Component
const ChatProvider = ({ children }) => {
   const [messages, setMessages] = useState([]);
   const [inputValue, setInputValue] = useState("");
   const [isBtnActive, setIsBtnActive] = useState(true);

   // Function to send API request
   const sendApiRequest = async (message) => {
      setIsBtnActive(false);

      const API = import.meta.env.VITE_KEY;
      const userMessage = { type: "user", response: message };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Prepare the payload according to API requirements
      const payload = {
         contents: [
            {
               parts: [
                  {
                     text: message,
                  },
               ],
            },
         ],
      };

      try {
         // Send the request
         const response = await axios.post(API, payload);
         const apiResponse = response.data;

         const content = apiResponse.candidates[0]?.content?.parts[0]?.text || "No response received";

         // Add API response to messages
         setMessages((prevMessages) => [
            ...prevMessages,
            { type: "god", response: content },
         ]);
      } catch (error) {
         console.error("Error fetching data", error);
      } finally {
         setIsBtnActive(true);
      }

   };


   return (
      <ChatContext.Provider value={{ messages, setMessages, inputValue, setInputValue, sendApiRequest, isBtnActive, setIsBtnActive }}>
         {children}
      </ChatContext.Provider>
   );
};

export { ChatProvider, ChatContext };
