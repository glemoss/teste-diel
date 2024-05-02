"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
async function tasksRoutes(fastify) {
    fastify.get('/tasks', async (request, reply) => {
        try {
            const { rows } = await db_1.default.query('SELECT * FROM tasks');
            return rows;
        }
        catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            reply.status(500).send('Erro ao buscar tarefas');
        }
    });
}
exports.default = tasksRoutes;
