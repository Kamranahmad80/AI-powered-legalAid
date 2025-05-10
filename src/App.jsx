import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Analytics } from '@vercel/analytics/react';
import CategorySelector from './components/CategorySelector';
import CountrySelector from './components/CountrySelector';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import Disclaimer from './components/Disclaimer';
import { generateLegalResponse } from './services/api';
import './App.css';


const AppContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
`;

const Header = styled.header`
  text-align: left;
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #ffffff;
`;

const Title = styled.h1`
  color: #333333;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-color: #0056b3;
    border-radius: 6px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  margin: 0;
  font-size: 14px;
  display: none; /* Hide for now to match ChatGPT UI */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  position: relative;
  padding: 0 20px;
  background-color: #f7f7f8;
`;

const InputWrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px 20px;
  background-color: #f7f7f8;
  border-top: 1px solid #e5e5e5;
  margin-top: auto;
  z-index: 10;
`;

function App() {
  const [messages, setMessages] = useState([]);
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('General');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    // Check if API key is set
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setApiKeyMissing(true);
    }
  }, []);

  const handleSendMessage = async (message) => {
    if (!category) {
      // Add a system message if no category is selected
      setMessages([...messages, 
        { text: message, isUser: true },
        { text: "Please select a legal category before asking a question.", isUser: false }
      ]);
      return;
    }

    // Add user message to chat
    setMessages([...messages, { text: message, isUser: true }]);
    setIsLoading(true);

    try {
      // Get AI response with country context
      const response = await generateLegalResponse(message, category, country);
      
      // Add AI response to chat
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages((prev) => [
        ...prev, 
        { text: "I'm sorry, I couldn't process your request. Please try again later.", isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContainer>
      <Analytics />
      <Header>
        <Title>AI Legal Aid Chatbot</Title>
        <Subtitle>Get simple, clear answers to common legal questions</Subtitle>
      </Header>

      <MainContent>
        {apiKeyMissing && (
          <div style={{ padding: '10px', background: '#ffdddd', border: '1px solid #ff0000', borderRadius: '5px', margin: '10px 0' }}>
            <strong>API Key Missing:</strong> Please add your Gemini API key to the .env file as VITE_GEMINI_API_KEY.
          </div>
        )}

        <ChatContainer 
          messages={messages} 
          isLoading={isLoading} 
        />
        
        <InputWrapper>
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginBottom: '15px', 
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <CategorySelector 
              selectedCategory={category} 
              onCategoryChange={setCategory} 
            />
            <CountrySelector
              selectedCountry={country}
              onCountryChange={setCountry}
            />
          </div>
          <ChatInput 
            onSendMessage={handleSendMessage} 
            disabled={isLoading || apiKeyMissing} 
          />
          <Disclaimer />
        </InputWrapper>
      </MainContent>
    </AppContainer>
  )
}

export default App
