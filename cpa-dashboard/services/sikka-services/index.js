import { startServer } from './app/server.js';

const PORT = process.env.SIKKA_SERVICE_PORT || 3003;

startServer(PORT);
