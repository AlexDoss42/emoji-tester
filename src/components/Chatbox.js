import React from 'react';
import Chatbubble from './ChatBubble';

const Chatbox = (props) => {
  return (
    <div style={{ width: '400px', height: '600px', border: '1px solid grey' }}>
      {props.chat.map((mess) => {
        return <Chatbubble message={mess} />;
      })}
    </div>
  );
};

export default Chatbox;
