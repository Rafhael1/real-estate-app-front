import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const pool = require("./db");
const upload = require('express-fileupload');
const port = process.env.PORT || 8000;
 


// types .
import { Istorage } from "./types/types";


// Middlewares
app.use(cors());
app.use(upload()); //req body

// Routes

app.post('/api/upload', (req, res) => {
  if(req.files){
    //console.log(req.files);
    const file: any = req.files.image;
    const fileName = file.name;
    const uploadPath = __dirname + '/uploads/' + Date.now() + fileName
    
    file.mv(uploadPath, (err: any) => {
      if (err){
        console.log(err)
      } else {
        console.log('Worked')
      }
    })
  }
})


app.listen(port,()=>{
  console.log('Server Started at Port, http://localhost:8000')
})
