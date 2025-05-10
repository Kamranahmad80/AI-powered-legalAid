import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 10px;
  gap: 10px;
  background-color: white;
  border: 2px solid #0056b3;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 8px 12px;
  border: none;
  resize: none;
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  outline: none;
  background-color: white;
  color: #333;
  
  &::placeholder {
    color: #666;
  }
`;

const SendButton = styled.button`
  background-color: white;
  color: #333;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    cursor: not-allowed;
  }

  /* Arrow styles */
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #333;
    transform: translateY(-2px);
  }
`;

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <TextArea
        placeholder="Type your legal question here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <SendButton type="submit" disabled={!message.trim() || disabled}>
      </SendButton>
    </InputContainer>
  );
};

export default ChatInput;
