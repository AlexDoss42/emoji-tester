import React from 'react';

const Chatbubble = (props) => {
  return (
    <div
      style={{ color: 'white', backgroundColor: 'lightblue', width: '200px' }}
    >
      {props.message}
    </div>
  );
};

export default Chatbubble;
