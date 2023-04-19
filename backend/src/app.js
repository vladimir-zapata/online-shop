import "./config";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
//Routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);
app.use(authRoutes);

app.set('port', process.env.PORT || 3000);

export default app;