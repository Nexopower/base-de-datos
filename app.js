import express from 'express';
import alergiasRoutes from './src/routes/alergia.routes.js'

const app = express();

app.use(express.json());

app.use(alergiasRoutes);

export default app;