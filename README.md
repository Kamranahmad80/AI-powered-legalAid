# 🌟 AI Legal Aid Chatbot

<div align="center">

![Legal Aid Chatbot](https://img.shields.io/badge/AI-Legal%20Aid-blue)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-8B5CF6)

*A modern, intuitive AI chatbot that provides accessible legal guidance across global jurisdictions.*

</div>

## ✨ Features

- **🔍 Intelligent Legal Assistance**: Provides concise, helpful legal information on a variety of topics
- **🌎 Global Legal Context**: Supports over 190 countries for location-specific guidance
- **🧩 Category Filtering**: Filter questions by legal categories for more relevant responses
- **💬 ChatGPT-like Interface**: Clean, intuitive UI designed for easy interaction
- **🚨 Ethical Disclaimers**: Clear notifications about the limitations of AI legal advice
- **📱 Responsive Design**: Works seamlessly on both desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/legal-aid.git
   cd legal-aid
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your_gemini_api_key
     ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🖥️ Usage

1. **Select a Legal Category**
   - Choose the relevant legal topic for your question

2. **Choose Your Country**
   - Select your country to get jurisdiction-specific information

3. **Ask Your Question**
   - Type your legal query in the input field
   - Press enter or click the send button to submit

4. **Review the Response**
   - The AI will provide a helpful, easy-to-understand response
   - Remember that this is general information, not professional legal advice

## 🏗️ Project Structure

```
/src
  /components         # React components
    ChatContainer.jsx # Manages the chat display
    ChatInput.jsx     # Handles user input
    Message.jsx       # Renders individual messages
    CategorySelector.jsx # Category dropdown
    CountrySelector.jsx  # Country dropdown
    Disclaimer.jsx    # Legal disclaimer
  /services
    api.js           # Gemini API integration
  App.jsx            # Main application
  main.jsx           # Entry point
```

## 🛠️ Technologies

- **React**: UI library for building component-based interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Styled Components**: CSS-in-JS for component styling
- **Gemini API**: Google's Generative AI for producing legal responses

## ⚠️ Disclaimer

This chatbot provides general legal information only. It is not a substitute for professional legal advice. The information may not be accurate for your specific situation or jurisdiction. Always consult with a qualified legal professional before making decisions on legal matters.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

<div align="center">
Made with ❤️ for better legal accessibility
</div>
