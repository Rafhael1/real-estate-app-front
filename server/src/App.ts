import express, { Request, Response } from "express"
import cors from "cors"
const app = express()
import mongoose from "mongoose"
const port = process.env.PORT || 8000

import multer from "multer"

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./upload/")
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname)
	}
})

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 10
	}
})

// types

import Property from "./models/property"

// Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use("/upload", express.static("upload"))
app.use(cors())


// db

mongoose.connect("mongodb+srv://RafhaelMarques_01:Rafafoda123@cluster0.tjd1c.mongodb.net/properties?retryWrites=true&w=majority", {useNewUrlParser: true})


// Routes


app.get("/api/image", async (req, res) => {
	
	const data = await Property.find({})
	

	res.send(data)


})

app.post("/api/upload", upload.array("images"), (req, res) => {


	if(req.body && req.files){
		const filePath = req.files
		const body = req.body.body
		const parse = JSON.parse(req.body.body)
		console.log(filePath, parse)
	
	}

	const record = {
		title: "A",
		description: "b",
		address: "c",
		country: "d", 
		price: 1231,
		status: "f",
		
	} 

	res.send("Hey")

	// try {
	// 	if(req.body && req.files){

	// 		const {title, description, address, country, price, status} = JSON.parse(req.body.document)
   
	// 		const files: any = await req.files.image

	// 		const uploadPath = __dirname + "/uploads/" + Date.now() + files.name
  
	// 		files.mv(uploadPath, (err: string) => {
	// 			if (err){
	// 				console.log(err)
	// 			} else {
	// 				console.log("Image Moved into the folder")
	// 			}
	// 		})

	// 		const data = await {
	// 			title: title,
	// 			description: description,
	// 			address: address,
	// 			country: country, 
	// 			price: price,
	// 			status: status,
	// 			images: uploadPath
	// 		}

	// 		await Property.create(data)
      
	// 	} 
	// } catch (error) {
	// 	console.log(error)
	// }
})


app.listen(port,()=>{
	console.log("Server Started at Port, http://localhost:8000")
})
