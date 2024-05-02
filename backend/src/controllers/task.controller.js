"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db/db"));
class TaskController {
    static async createTask(request, reply) {
        try {
            const { title, description, datetime, duration } = request.body;
            const result = await db_1.default.query('INSERT INTO tasks (title, description, datetime, duration) VALUES ($1, $2, $3, $4)', [title, description, datetime, duration]);
            return reply.code(201).send({ message: 'Tarefa criada com sucesso.' });
        }
        catch (error) {
            console.error('Erro ao criar tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao criar tarefa.' });
        }
    }
    static async updateTask(request, reply) {
        try {
            const params = request.params;
            const taskId = params.id;
            const { title, description, datetime, duration } = request.body;
            const result = await db_1.default.query('UPDATE tasks SET title = $1, description = $2, datetime = $3, duration = $4 WHERE id = $5', [title, description, datetime, duration, taskId]);
            return reply.code(200).send({ message: 'Tarefa atualizada com sucesso.' });
        }
        catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao atualizar tarefa.' });
        }
    }
    static async deleteTask(request, reply) {
        try {
            const params = request.params;
            const taskId = params.id;
            const result = await db_1.default.query('DELETE FROM tasks WHERE id = $1', [taskId]);
            return reply.code(200).send({ message: 'Tarefa excluída com sucesso.' });
        }
        catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao excluir tarefa.' });
        }
    }
    static async getTasks(request, reply) {
        try {
            const result = await db_1.default.query('SELECT * FROM tasks');
            return reply.code(200).send(result.rows);
        }
        catch (error) {
            console.error('Erro ao obter tarefas:', error);
            return reply.code(500).send({ message: 'Erro ao obter tarefas.' });
        }
    }
    static async getTaskByTitle(request, reply) {
        try {
            const params = request.params;
            const title = params.title;
            // Execute a consulta SQL para buscar a tarefa pelo título
            const result = await db_1.default.query('SELECT * FROM tasks WHERE title = $1', [title]);
            if (result.rows.length > 0) {
                return reply.code(200).send(result.rows[0]);
            }
            else {
                return reply.code(404).send({ message: 'Tarefa não encontrada.' });
            }
        }
        catch (error) {
            console.error('Erro ao buscar tarefa pelo título:', error);
            return reply.code(500).send({ message: 'Erro ao buscar tarefa pelo título.' });
        }
    }
}
exports.default = TaskController;
