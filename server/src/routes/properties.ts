import express, { Request, Response } from "express"
const router = express.Router()

import multer from "multer"

// Schemas

import Property from "../models/property"

// Verification middleware

import verify from "./verifyToken"

// Image Storage

const storage = multer.diskStorage({
	destination: (req: Request, file, cb) => {
		cb(null, "../upload/")
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

router.get("/properties", verify, async (req: Request, res: Response) => {
	
	const data = await Property.find({})
	

	res.send(data)


})

router.post("/api/upload", verify, upload.array("images"), async(req: Request, res: Response) => {
	if(req.body && req.files){
		const filePath: any = req.files
		const body = req.body.body
		const parse = JSON.parse(req.body.body)
		console.log(filePath, parse, body)

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

		res.send("Uploaded sucessfully")

	}

})

export default router

