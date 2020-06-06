const express = require("express");
const server = express();

//setup public folder
server.use(express.static("public"));

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

server.get("/create_point", (req, res) => {
    res.sendFile(__dirname + "/views/create_point.html");
});

server.listen(3050);