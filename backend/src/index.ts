import fastify from 'fastify';
import tasksRoutes from './routes/task.routes';

const app = fastify({ logger: true });

app.register(tasksRoutes);

const start = async () => {
    try {
        await app.listen(3000);
        app.log.info('Servidor iniciado');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
