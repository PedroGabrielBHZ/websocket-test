const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const PORT = 3000;
const publicDir = path.join(__dirname, 'public');

// Create HTTP server
const server = http.createServer((req, res) => {
    let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            // Inject live reload script into HTML files
            if (filePath.endsWith('.html')) {
                const injected = content.toString().replace(
                    '</body>',
                    `<script>
                        const ws = new WebSocket('ws://' + location.host);
                        ws.onmessage = (event) => {
                            if (event.data === 'reload') {
                                location.reload();
                            }
                        };
                    </script></body>`
                );
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(injected);
            } else {
                res.writeHead(200);
                res.end(content);
            }
        }
    });
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Watch files for changes
chokidar.watch(publicDir).on('change', (filePath) => {
    console.log('File changed:', filePath);
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('reload');
        }
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Live Server running at http://localhost:${PORT}`);
});
