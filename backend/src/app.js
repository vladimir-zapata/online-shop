import "./config";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';
//Routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(productRoutes);

app.set('port', process.env.PORT || 3000);

export default app;