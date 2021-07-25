import express, { Request, Response } from "express"
import cors from "cors"
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
const port = process.env.PORT || 8000


dotenv.config()

import authRoute from "./routes/auth"
import propertiesRoute from "./routes/properties"


import multer from "multer"

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use("/upload", express.static("upload"))

mongoose.connect("mongodb+srv://RafhaelMarques_01:Rafafoda123@cluster0.tjd1c.mongodb.net/properties?retryWrites=true&w=majority", {useNewUrlParser: true})
// route middlewares

app.use("/api/user", authRoute)
app.use("/api/realestates", propertiesRoute)

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


// db



// Routes


app.get("/api/image", async (req, res) => {
	
	const data = await Property.find({})
	

	res.send(data)


})

app.post("/api/upload", upload.array("images"), async(req, res) => {


	if(req.body && req.files){
		const filePath: any = req.files
		const body = req.body.body
		const parse = JSON.parse(req.body.body)
		console.log(filePath, parse)

		// eslint-disable-next-line prefer-const
		let imagePaths: string[] = []

		for(let i = 0; i < filePath.length; i++ ){
			console.log(filePath[i].path, "doidera")
			imagePaths.push(filePath[i].path)
		}

		console.log(imagePaths)
	
		const record = {
			title: "julho",
			description: "julho",
			address: "julho",
			country: "julho", 
			price: "696969",
			status: "sheeesh",
			images: imagePaths
		} 

		Property.create(record)

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
