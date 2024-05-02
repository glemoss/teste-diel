import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import db from '../db/db';

export default async function tasksRoutes(fastify: FastifyInstance) {
    fastify.get('/tasks', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { rows } = await db.query('SELECT * FROM tasks');

            return rows;
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            reply.status(500).send('Erro ao buscar tarefas');
        }
    });
}
