"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
async function taskRoutes(fastify) {
    fastify.post('/tasks', task_controller_1.default.createTask);
    fastify.put('/tasks/:id', task_controller_1.default.updateTask);
    fastify.delete('/tasks/:id', task_controller_1.default.deleteTask);
    fastify.get('/tasks', task_controller_1.default.getTasks);
    fastify.get('/tasks/:title', task_controller_1.default.getTaskByTitle);
}
exports.default = taskRoutes;
