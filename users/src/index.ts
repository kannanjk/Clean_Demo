import { connectDB } from './config/db';
import dotenv from 'dotenv'
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('User Server');
});

connectDB()


app.listen(port, () => {
  console.log(`User Server is running at ${port}`);
});
