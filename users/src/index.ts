import { connectDB } from './config/db';
import dotenv from 'dotenv'
import express, { Request, Response, json } from "express";
import { routes } from './routes';
import dependencies from './config/dependencies';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("trust proxy", true);
app.use(json());

app.use('/api', routes(dependencies))

connectDB()

app.listen(port, () => {
  console.log(`User Server is running at ${port}`);
});
