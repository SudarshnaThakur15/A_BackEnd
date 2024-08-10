import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config({path:'.env'});
import connect from './db/connection.js';
connect()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });     
})
.catch((error)=>{
    console.log("Error connecting to the database: ",error);
    process.exit(1);
});