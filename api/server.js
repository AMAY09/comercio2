import http from "http";

const server = http.createServer();
server.on("listening", () => {
    console.info("Server running on Port 8080");
});

server.listen(8080);
