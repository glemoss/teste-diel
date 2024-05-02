import fastify from 'fastify';
import fastifyCors from '@fastify/cors';

import tasksRoutes from './routes/task.routes';

const app = fastify({ logger: true });

app.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

app.register(tasksRoutes);

const start = async () => {
    try {
        await app.listen(
            {
                port: 3001,
            }
        );
        app.log.info('Servidor iniciado');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
