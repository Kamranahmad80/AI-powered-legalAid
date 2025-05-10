import React from 'react';
import styled from 'styled-components';

// Styled components for the message bubbles
// Use transient props (with $) to prevent them from being passed to the DOM
const MessageContainer = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: flex-start;
  background-color: ${(props) => (props.$isUser ? '#f7f7f8' : '#ffffff')};
  border-radius: 0;
  width: 100%;
  max-width: 760px;
`;

const MessageBubble = styled.div`
  width: 100%;
  padding: 0;
  border-radius: 0;
  background-color: transparent; /* ChatGPT style uses the container background */
  color: #343541;
  font-size: 16px;
  line-height: 1.5;
  box-shadow: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  a {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin-right: 15px;
  background-color: ${(props) => (props.$isUser ? '#1a1a1a' : '#0056b3')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  color: white;
  box-shadow: none;
  flex-shrink: 0;
`;

const Message = ({ text, isUser }) => {
  return (
    <MessageContainer $isUser={isUser}>
      <Avatar $isUser={isUser}>{isUser ? 'U' : 'AI'}</Avatar>
      <MessageBubble $isUser={isUser}>
        <p>{text}</p>
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
