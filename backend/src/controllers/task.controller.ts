import { FastifyRequest, FastifyReply } from 'fastify';
import db from '../db/db';
import { Task } from '../types/task'

export default class TaskController {
    static async createTask(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { title, description, datetime, duration } = request.body as Task;

            const result = await db.query(
                'INSERT INTO tasks (title, description, datetime, duration) VALUES ($1, $2, $3, $4)',
                [title, description, datetime, duration]
            );

            return reply.code(201).send({ message: 'Tarefa criada com sucesso.' });
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao criar tarefa.' });
        }
    }

    static async updateTask(request: FastifyRequest, reply: FastifyReply) {
        try {
            const params = request.params as Task
            const taskId = params.id;
            const { title, description, datetime, duration } = request.body as Task;

            const result = await db.query(
                'UPDATE tasks SET title = $1, description = $2, datetime = $3, duration = $4 WHERE id = $5',
                [title, description, datetime, duration, taskId]
            );

            return reply.code(200).send({ message: 'Tarefa atualizada com sucesso.' });
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao atualizar tarefa.' });
        }
    }

    static async deleteTask(request: FastifyRequest, reply: FastifyReply) {
        try {
            const params = request.params as Task
            const taskId = params.id;

            const result = await db.query(
                'DELETE FROM tasks WHERE id = $1',
                [taskId]
            );

            return reply.code(200).send({ message: 'Tarefa excluída com sucesso.' });
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            return reply.code(500).send({ message: 'Erro ao excluir tarefa.' });
        }
    }

    static async getTasks(request: FastifyRequest, reply: FastifyReply) {
        try {
            const result = await db.query('SELECT * FROM tasks');

            return reply.code(200).send(result.rows);
        } catch (error) {
            console.error('Erro ao obter tarefas:', error);
            return reply.code(500).send({ message: 'Erro ao obter tarefas.' });
        }
    }

    static async getTaskByTitle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const params = request.params as Task
            const title = params.title as string;

            // Execute a consulta SQL para buscar a tarefa pelo título
            const result = await db.query('SELECT * FROM tasks WHERE title = $1', [title]);

            if (result.rows.length > 0) {
                return reply.code(200).send(result.rows[0]);
            } else {
                return reply.code(404).send({ message: 'Tarefa não encontrada.' });
            }
        } catch (error) {
            console.error('Erro ao buscar tarefa pelo título:', error);
            return reply.code(500).send({ message: 'Erro ao buscar tarefa pelo título.' });
        }
    }
}
