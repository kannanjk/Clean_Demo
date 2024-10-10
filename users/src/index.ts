import { connectDB } from './config/db';
import dotenv from 'dotenv'
import express, {  json } from "express"; 
import { routes } from './routes';
import dependencies from './config/dependencies'; 
import { Publisher } from './events/publisher/userCreate';
import { listeners } from './events/listeners/user';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("trust proxy", true);
app.use(json());

app.use('/api', routes(dependencies))

Publisher()
listeners()
connectDB()

app.listen(port, () => {
  console.log(`User Server is running at ${port}`);
});
