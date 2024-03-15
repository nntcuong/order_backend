import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import UserRoute from "./routes/UserRoute";
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database"));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Hello!' });
});

app.get("/health",async(req:Request,res:Response) => {
    res.send({message:"health  OK!"});
});
app.use("/api/my/user",UserRoute)



app.listen(7000, () => {
    console.log(`Server started on http://localhost:7000`);
});
