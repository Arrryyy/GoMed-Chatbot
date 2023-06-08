# GoMed-Chatbot
# Chatbot Project

This is a chatbot project that implements a computer program capable of simulating human conversation through text chats. The chatbot is designed to understand and interact with users in a question and answer (Q&A) fashion. It is also capable of conducting conversations on a specific assigned topic, performing tasks within the context of that topic, and remembering the conversation history.

## Functional Requirements

- The chatbot should be able to steer the conversation by asking aggressive questions.
- The chatbot should understand the intents from a user's answers (utterances).
- If the chatbot fails to understand a user's utterance, it should ask the user to rephrase.
- If the chatbot repeatedly fails to advance the conversation, it should start the conversation from the beginning.
- The chatbot should be capable of conducting conversations with more than 20 Q&A turns.
- The chatbot should avoid repeating itself, except for fallback questions.
- The user interface should have a modern look and feel, supporting responsive web design for mobile devices, tablets, and desktop computers.
- The user interface should display questions and answers alternatingly in a list-like shape.

## Non-Functional Requirements

- The frontend should be implemented as an HTML5 website.
- The frontend layout should be realized using CSS.
- The frontend should be based on the React framework and consist of at least 4 React components.
- Communication between the frontend and backend should be achieved using Socket.IO and the Websocket protocol.
- The backend should be based on Node.js and use Express.js to serve the application's user interface.
- The backend should identify user intents based on keyword spotting.
- The backend should be extensible, allowing the addition of new topics, intents, and answers without changing the source code.

## Code Reuse Rules

- It is allowed to reuse existing layouts from platforms like Bootsnip or OnAirCode, except for the chat layout by Pavel Komiagin.
- It is allowed to reuse code examples from the lecture materials uploaded to iLearn, except for the chat layout by Pavel Komiagin.
- Code reuse from any other sources, including ChatGPT, is not allowed.

## Task 1 - Chatbot Implementation

In this task, you need to implement the chatbot as described in the functional and non-functional requirements. The chatbot should be able to accomplish tasks within the assigned topic, conduct conversations with more than 20 Q&A turns, and have a modern and responsive user interface. The frontend should be implemented using HTML5, CSS, and the React framework. The backend should be based on Node.js, use Express.js for serving the user interface, and communicate with the frontend using Socket.IO and the Websocket protocol. The backend should also identify user intents through keyword spotting and be extensible for adding new topics, intents, and answers without changing the source code.

## Task 2 - Chatbot Deployment

In this task, you need to deploy the chatbot implementation to the Microsoft Azure cloud. The deployed chatbot should be accessible via a publicly available URL and all communication should be encrypted using SSL/TLS. To host the chatbot, you can choose between Azure App Services or Azure Virtual Machines. It is recommended to enroll for the "Azure for Students" subscription to take advantage of the $100 credits.

## Task 3 - Chatbot Engine (Optional)

In this optional task, you can improve the chatbot by replacing the keyword-spotting approach with the Microsoft Azure's Language Understanding (LUIS) service or the APIs provided by OpenAI to detect the intent from a user's utterance. The functional and non-functional requirements remain the same as in Task 1, except for keyword spotting. Submit a fully operational solution for Task 3 in addition to the solution of Task
