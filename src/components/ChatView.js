import React, { useState } from 'react';
import Chatbox from './Chatbox';
import ChatInput from './ChatInput';

const ChatView = () => {
  const [chat, setChat] = useState([]);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Chatbox chat={chat} />
      <ChatInput chat={chat} setChat={setChat} />
    </div>
  );
};

export default ChatView;
