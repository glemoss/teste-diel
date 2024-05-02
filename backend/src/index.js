"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const app = (0, fastify_1.default)({ logger: true });
app.register(task_routes_1.default);
const start = async () => {
    try {
        await app.listen(3000);
        app.log.info('Servidor iniciado');
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
