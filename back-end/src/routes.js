const express = require("express");
const TodoController = require("./controllers/TodoController");
const authController = require("./controllers/authController");
const authMiddleware = require("./middlewares/auth");

const routes = new express.Router();

routes.post("/auth/register", authController.register);
routes.post("/auth/login", authController.auth);

routes.get("/todos", authMiddleware, TodoController.index);
routes.get("/todos/:id", authMiddleware, TodoController.show);
routes.post("/todos", authMiddleware, TodoController.store);
routes.put("/todos/:id", authMiddleware, TodoController.update);
routes.delete("/todos/:id", authMiddleware, TodoController.delete);

module.exports = routes;