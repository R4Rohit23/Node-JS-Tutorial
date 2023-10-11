// Net module provides an asynchronous network API for creating network applications

const net = require("net");

// Once you have imported the module, you can use net.createServer() to create a new TCP server. This method takes a callback function which will be called whenever a client connects to the server. This callback function itself takes a socket object as an argument; this socket object represents the connection to the client.
const server = net.createServer((socket) => {
    console.log("Client connected successfully!");

    // We can use the socket.write() method to send a welcome message to a newly-connected client.
    socket.write("Hello Net!");

    // When clinet end the connection
    socket.on("end", () => {
        console.log("Client disconnected");
    })
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})