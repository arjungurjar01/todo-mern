import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongodb.js"; 
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors" ;

const app = express(); 
dotenv.config();

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5200",
    credentials:true
}));


app.use('/api/user',userRouter);
app.use('/api/todo',todoRouter);

const PORT = process.env.PORT || 3000;

// api end points


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`); 
})
