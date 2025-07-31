import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
// Access the API key from import.meta.env instead of process.env
const API_KEY = import.meta.env.REACT_APP_GEMINI_API_KEY || 'YOUR_API_KEY';

// Debug: Log the API key (first few characters only for security)
console.log('API Key available:', API_KEY ? `${API_KEY.substring(0, 5)}...` : 'Not found');

const genAI = new GoogleGenerativeAI(API_KEY);

// Use the Gemini model - you can change the model as needed
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Function to generate a response from Gemini
export const generateChemistryResponse = async (prompt: string): Promise<string> => {
  try {
    // Check if API key is valid
    if (!API_KEY || API_KEY === 'YOUR_API_KEY') {
      throw new Error('Invalid API key. Please set a valid Gemini API key in your .env file.');
    }

    console.log('Using API key:', API_KEY.substring(0, 5) + '...');
    
    // Add context to ensure responses are chemistry-focused
    const chemistryPrompt = `You are a chemistry expert assistant for students. 
    Please provide accurate, educational responses to this chemistry question: ${prompt}. 
    If the question is not related to chemistry, politely explain that you're a chemistry assistant 
    and can only answer chemistry-related questions.`;
    
    console.log('Sending request to Gemini API...');
    const result = await model.generateContent(chemistryPrompt);
    console.log('Received result from Gemini API');
    
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error('Error generating response from Gemini:', error);
    
    // Provide more specific error messages based on the error type
    if (error.message?.includes('API key')) {
      throw new Error('Invalid API key. Please check your .env file and ensure you have set a valid Gemini API key.');
    } else if (error.message?.includes('network')) {
      throw new Error('Network error. Please check your internet connection and try again.');
    } else if (error.message?.includes('quota')) {
      throw new Error('API quota exceeded. Please try again later or check your Gemini API usage limits.');
    } else {
      throw new Error(`Failed to generate response from Gemini API: ${error.message || 'Unknown error'}`);
    }
  }
};