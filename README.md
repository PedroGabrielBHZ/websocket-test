# WebSocket Test

This is a simple WebSocket-based project to demonstrate real-time communication between a server and a browser client. Additionally, it includes a live server with file watching and automatic browser reloading.

## Project Structure

- **index.html**: The client-side code that connects to the WebSocket server and sends/receives messages.
- **live-server.js**: A live server that serves files from the `public/` directory, watches for file changes, and reloads the browser automatically.
- **server.js**: The WebSocket server that handles client connections and exchanges messages.
- **package.json**: Contains project metadata and dependencies (if any).
- **public/**: Directory containing static files served by the live server.

## How It Works

### WebSocket Server
1. The WebSocket server (`server.js`) listens on `ws://localhost:8080` for incoming connections.
2. The client (`index.html`) connects to the WebSocket server and sends a message when the "Send Message" button is clicked.
3. The server receives the message, logs it, and sends a response back to the client.
4. The client displays the server's response in the browser console.

### Live Server
1. The live server (`live-server.js`) serves files from the `public/` directory on `http://localhost:3000`.
2. It injects a WebSocket-based live reload script into HTML files.
3. When a file in the `public/` directory changes, the server notifies connected clients to reload the page automatically.

## How to Run

### WebSocket Server
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Start the WebSocket server:
   ```bash
   node server.js
   ```
3. Open `index.html` in a browser.
4. Click the "Send Message" button to send a message to the server.
5. Check the browser console and server logs to see the message exchange.

### Live Server
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Start the live server:
   ```bash
   node live-server.js
   ```
3. Open `http://localhost:3000` in a browser.
4. Edit files in the `public/` directory to see the browser reload automatically.

## Features

- Real-time communication using WebSocket.
- UTF-8 encoding for message handling.
- Live reloading for development convenience.
- File watching with automatic browser updates.

## Requirements

- Node.js
- A modern web browser

## License

This project is for educational purposes and is free to use.