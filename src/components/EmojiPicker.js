import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker, toggleShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const showPickerHandler = () => {
    toggleShowPicker(!showPicker);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      {showPicker ? (
        <Picker onEmojiClick={onEmojiClick} />
      ) : (
        <i className='far fa-smile' onClick={showPickerHandler}></i>
      )}
    </div>
  );
};

export default EmojiPicker;
