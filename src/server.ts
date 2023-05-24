
import express from 'express';
import { userRoutes } from './routers/user.routes';
import { videosRoutes } from './routers/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

console.log(process.env.SECRET);



//localhost:4001 nosso endpoint



app.use(express.json());
app.use('/user', userRoutes)
app.use('/videos', videosRoutes)

app.listen(4001);