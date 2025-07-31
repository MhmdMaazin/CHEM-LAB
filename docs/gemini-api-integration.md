# Gemini API Integration Guide

## Overview

This document explains how the Google Gemini API is integrated into the ChemLab project to power the chemistry chatbot functionality.

## What is Gemini?

Gemini is Google's most advanced AI model, capable of understanding and generating text, code, images, and more. In ChemLab, we use Gemini to provide accurate, educational responses to chemistry-related questions.

## Integration Details

### Files Involved

- `src/utils/geminiApi.ts` - Contains the API integration code
- `src/pages/Chatbot.tsx` - Uses the Gemini API to generate responses
- `.env` - Stores the API key securely

### How It Works

1. When a user sends a message in the chatbot:
   - The message is captured in the Chatbot component
   - The message is sent to the Gemini API via the `generateChemistryResponse` function
   - The API returns a response which is displayed to the user

2. The `generateChemistryResponse` function:
   - Adds context to ensure responses are chemistry-focused
   - Handles errors gracefully
   - Returns the formatted response

## Customization

### Changing the Model

You can change which Gemini model is used by modifying the `model` parameter in `geminiApi.ts`. Available options include:

- `gemini-1.5-flash` (default) - Fast responses, good for most use cases
- `gemini-1.5-pro` - More comprehensive responses, but slower

### Modifying the Prompt

The chemistry context prompt can be modified in `geminiApi.ts`. You might want to adjust this to:

- Focus on specific areas of chemistry
- Change the tone or style of responses
- Add additional constraints or guidelines

## Troubleshooting

### API Key Issues

If you're experiencing issues with the API:

1. Verify your API key is correctly set in the `.env` file
2. Ensure you have sufficient quota for the Gemini API
3. Check the browser console for specific error messages

### Response Quality

If responses aren't meeting expectations:

1. Try adjusting the chemistry prompt in `geminiApi.ts`
2. Consider using a different Gemini model
3. Add more specific context to your prompts

## Resources

- [Google AI Studio](https://aistudio.google.com/)
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [Google Gen AI SDK for JavaScript](https://www.npmjs.com/package/@google/generative-ai)