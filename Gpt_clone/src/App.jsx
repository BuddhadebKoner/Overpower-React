import React from 'react';
import './App.css';
// components
import Sidebar from './components/Sidebar';
import Chatbox from './components/Chatbox';
import Input from './components/Input';
import { ChatProvider } from './context/ChatContext';

export default function src() {

  return (
    <ChatProvider>
      <div className="app">
        <div className="sidebar_section">
          <Sidebar />
        </div>
        <div className="chat_section">
          <div className="Output_section">
            <Chatbox />
          </div>
          <div className="input_section">
            <Input />
          </div>
        </div>
      </div>
    </ChatProvider>
  )
}