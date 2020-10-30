import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker, toggleShowPicker] = useState(false);
  const [msgText, setMsgText] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMsgText(msgText + emojiObject.emoji);
  };

  const showPickerHandler = () => {
    toggleShowPicker(!showPicker);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {msgText}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      {showPicker ? (
        <div>
          <p onClick={showPickerHandler}>abc</p>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      ) : (
        <i className='far fa-smile' onClick={showPickerHandler}></i>
      )}
    </div>
  );
};

export default EmojiPicker;
