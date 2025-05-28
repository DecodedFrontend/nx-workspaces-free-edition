import express from 'express';
import { getCoursesController } from './controllers/get-courses';

const app = express();

app.use(express.json());

app.get('/api/courses', getCoursesController);

export default app;
