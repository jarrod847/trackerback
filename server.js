const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const taskRouter = require("./api/tasks/task-router");
const foodRouter = require("./api/food/food-router");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/task", taskRouter);
server.use("/food", foodRouter);

module.exports = server;
