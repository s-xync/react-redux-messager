import React from 'react';
import './MessageInput.css';
import { setTypingValue, sendMessage } from '../actions';
import { store } from '../store';

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  }

  return(
    <form className="Message" onSubmit={handleSubmit}>
      <input type="text" className="Message__input" onChange={handleChange} placeholder="write a message" value={value}/>
    </form>
  );
}

export default MessageInput;
