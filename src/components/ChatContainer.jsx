import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 15px;
  background-color: transparent;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }

  /* Add moderate space between messages */
  > div + div {
    margin-top: 10px;
  }
`;

const WelcomeMessage = styled.div`
  text-align: left;
  padding: 15px 0;
  margin: 10px 0 20px;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  box-sizing: border-box;
  
  h2 {
    color: #1a1a1a;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
  }
  
  p {
    color: #555;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #f0f0f0;
  border-radius: 18px;
  max-width: fit-content;
  margin-bottom: 10px;
  
  span {
    width: 10px;
    height: 10px;
    background-color: #777;
    border-radius: 50%;
    display: inline-block;
    margin: 0 3px;
    animation: typing 1.4s infinite ease-in-out both;
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  
  @keyframes typing {
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.8;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ChatContainer = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <Container>
      <WelcomeMessage>
        <h2>Welcome to AI Legal Aid</h2>
        <p>
          I'm here to help you with general legal questions. Select a legal category
          and ask your question in simple terms. I'll do my best to provide clear,
          helpful information.
        </p>
      </WelcomeMessage>
      
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          isUser={message.isUser}
        />
      ))}
      
      {isLoading && (
        <TypingIndicator>
          <span></span>
          <span></span>
          <span></span>
        </TypingIndicator>
      )}
      
      <div ref={messagesEndRef} />
    </Container>
  );
};

export default ChatContainer;
