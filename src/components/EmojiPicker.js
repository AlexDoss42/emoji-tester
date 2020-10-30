import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = (props) => {
  const { msgText, setMsgText } = props;
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMsgText(msgText + emojiObject.emoji);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default EmojiPicker;
