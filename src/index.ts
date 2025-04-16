import express, { NextFunction, Request, Response } from "express";
import usersRouter from './routes/users';

const app = express();
app.use('/api/users', usersRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})
