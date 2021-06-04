import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const pool = require("./db");
const upload = require('express-fileupload');
const port = process.env.PORT || 8000;
 


// types .
import { Istorage } from "./types/types";


// Middlewares
app.use(express.json());
app.use(cors());
app.use(upload());

// Routes

app.post('/api/upload', async(req, res) => {
  try {
    if(req.body){
      const { title, description, address, country, price, status } = await req.body.body;
      console.log(title, description, address, country, price, status);

      const newProperty = await pool.query(
        "INSERT INTO properties( property_title, property_description, property_address, property_country, property_price, property_status) VALUES($1, $2, $3, $4, $5, $6)",
        [title, description, address, country, price, status]
        ); 

    }
   /* if(req.files){
      const file: any = req.files.image;
      const fileName = file.name;
      
      const uploadPath = __dirname + '/uploads/' + Date.now() + fileName;

      file.mv(uploadPath, (err: any) => {
        if (err){
          console.log(err)
        } else {
          console.log('Worked')
        }
      });

      const newImage = pool.query(
        "INSERT INTO property_images(property_image_path) VALUES($1) RETURNING *",
        [uploadPath]
      ) 
      console.log(fileName)
    } */
  } catch (error) {
    console.log(error)
  }
})


app.listen(port,()=>{
  console.log('Server Started at Port, http://localhost:8000')
})
