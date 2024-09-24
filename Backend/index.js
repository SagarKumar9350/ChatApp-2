import express from "express";
import dotenv from"dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import userRoute from "./routes/user.route.js"
import MessageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";



dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try{
mongoose.connect(URI)
    .then(console.log("connected to mongoDB"))
}catch(error){
    console.log(error);
}

//routes
app.use("/api/user",userRoute);
app.use("/api/message",MessageRoute);

// ..........................code for deployment................
if(process.env.NODE_ENV === "production"){
const dirPath = path.resolve();
app.use(express.static("./Frontend/dist"));
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
})
}


server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})