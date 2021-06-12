import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const upload = require('express-fileupload');
const mongoose = require('mongoose')
const port = process.env.PORT || 8000;
 
// types .

import { Istorage } from "./types/types";

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(upload());

// db

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
//mongoose.connect('mongodb+srv://RafhaelMarques_01:Rafafoda123@cluster0.tjd1c.mongodb.net/properties?retryWrites=true&w=majority', {useNewUrlParser: true});
const Property = require('./models/property')


// Routes

app.post('/api/create', async(req, res) => {
  try {
    const record = {
      title: 'A',
      description: 'b',
      address: 'c',
      country: 'd', 
      price: 1231,
      status: 'f',
      images: ['g']
    } 
  
    
    await Property.create(record)
  } catch (error) {
    
  }
})

app.post('/api/upload', async(req, res) => {
  try {
    if(req.body){
      const { title, description, address, country, price, status } = await req.body.body;
      console.log(req.body.body)
      if(req.files){

        let files: any = await req.files.image;

        const uploadPath = __dirname + '/uploads/' + Date.now() + files.name;
  
        files.mv(uploadPath, (err: string) => {
          if (err){
            console.log(err)
          } else {
            console.log('Image Moved into the folder')
          }
        });

        const data = {
          title: title,
          description: description,
          address: address,
          country: country, 
          price: price,
          status: status,
          images: uploadPath
        }

        await Property.create(data);

      }
    }
  } catch (error) {
    console.log(error)
  }
})


app.listen(port,()=>{
  console.log('Server Started at Port, http://localhost:8000')
})
