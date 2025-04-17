# WebSocket Test

This is a simple WebSocket-based project to demonstrate real-time communication between a server and a browser client.

## Project Structure

- **index.html**: The client-side code that connects to the WebSocket server and sends/receives messages.
- **server.js**: The WebSocket server that handles client connections and exchanges messages.
- **package.json**: Contains project metadata and dependencies (if any).

## How It Works

1. The WebSocket server (`server.js`) listens on `ws://localhost:8080` for incoming connections.
2. The client (`index.html`) connects to the WebSocket server and sends a message when the "Send Message" button is clicked.
3. The server receives the message, logs it, and sends a response back to the client.
4. The client displays the server's response in the browser console.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Start the WebSocket server:
   ```bash
   node server.js
   ```
3. Open `index.html` in a browser.
4. Click the "Send Message" button to send a message to the server.
5. Check the browser console and server logs to see the message exchange.

## Features

- Real-time communication using WebSocket.
- UTF-8 encoding for message handling.

## Requirements

- Node.js
- A modern web browser

## License

This project is for educational purposes and is free to use.