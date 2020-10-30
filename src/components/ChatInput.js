import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ChatInput = (props) => {
  const { chat, setChat } = props;

  const [showPicker, toggleShowPicker] = useState(false);
  const [msgText, setMsgText] = useState('');

  const showPickerHandler = () => {
    toggleShowPicker(!showPicker);
  };

  const sendMessage = () => {
    const conversation = [...chat, msgText];
    setChat(conversation);
    setMsgText('');
  };

  return (
    <div>
      <textarea value={msgText} onChange={(e) => setMsgText(e.target.value)} />
      <i onClick={sendMessage} class='fas fa-paper-plane'></i>
      {showPicker ? (
        <div>
          <p onClick={showPickerHandler}>abc</p>
          <EmojiPicker msgText={msgText} setMsgText={setMsgText} />
        </div>
      ) : (
        <i className='far fa-smile' onClick={showPickerHandler}></i>
      )}
    </div>
  );
};

export default ChatInput;
