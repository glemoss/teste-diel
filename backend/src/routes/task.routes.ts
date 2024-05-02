import { FastifyInstance } from 'fastify';
import TaskController from '../controllers/task.controller';

export default async function taskRoutes(fastify: FastifyInstance) {
    fastify.post('/tasks', TaskController.createTask);

    fastify.put('/tasks/:id', TaskController.updateTask);

    fastify.delete('/tasks/:id', TaskController.deleteTask);

    fastify.get('/tasks', TaskController.getTasks);

    fastify.get('/tasks/:title', TaskController.getTaskByTitle)
}
