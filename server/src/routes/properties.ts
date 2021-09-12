/* eslint-disable @typescript-eslint/ban-ts-comment */
import express, { Request, Response } from "express"
const router = express.Router()

import multer from "multer"

// Schemas

import Property from "../models/property"

// Verification middleware

import verify from "../middlewares/verifyToken"

// Image Storage

const storage = multer.diskStorage({
	destination: (req: Request, file, cb) => {
		// If it goes wrong just change it back to ../upload/
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

router.post("/upload", upload.array("images"), verify, async(req: Request, res: Response) => {
	try {
		const filePath: any = req.files
		const data = JSON.parse(req.body.data)
		const {
			title,
			description,
			address,
			country,
			price
		} = JSON.parse(req.body.data)
		// console.log(JSON.parse(req.body.data))
		console.log(title)
		// @ts-ignore
		console.log(req.user)
		// eslint-disable-next-line prefer-const
		let imagePaths: string[] = []

		for(let i = 0; i < filePath.length; i++ ){
			imagePaths.push(filePath[i].path)
		}

		// console.log(imagePaths)
	
		const record = {
			title: title,
			description: description,
			address: address,
			country: country, 
			price: price,
			status: "sheeesh",
			user: {
				id: "123123",
				email: "raf"
			},
			images: imagePaths
		} 

		Property.create(record)

		res.send("Uploaded sucessfully")

		

	} catch (error) {
		console.log(error)
	}
})

export default router

