const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const taskRouter = require("./api/tasks/task-router");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/task", taskRouter);

module.exports = server;
