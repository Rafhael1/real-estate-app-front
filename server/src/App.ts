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
app.use("/upload", express.static("upload"))
app.use(cors())


// db

mongoose.connect("mongodb+srv://RafhaelMarques_01:Rafafoda123@cluster0.tjd1c.mongodb.net/properties?retryWrites=true&w=majority", {useNewUrlParser: true})


// Routes


app.get("/api/image", (req, res) => {
	
	Property.find({})
		.then((results: any) => {
			console.log(results)
		})
		.catch((err: any) => {
			console.log(err)
		})



})

app.post("/api/upload", upload.single("image"), (req, res) => {

	const filePath = req.file?.path

	const record = {
		title: "A",
		description: "b",
		address: "c",
		country: "d", 
		price: 1231,
		status: "f",
		images: filePath
	} 

	Property.create(record)
		.then(res => console.log(res, "success"))
		.catch(err => console.log("shit here we go again", err))
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
