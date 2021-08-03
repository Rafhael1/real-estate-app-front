import express from "express"

const router = express.Router()
import User from "../models/user"

import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"

import verify from "./verifyToken"

import { body, validationResult } from "express-validator"

router.post("/register",
	body("email").isEmail(), 
	body("password").isLength({min: 6}),
	async(req, res) => {
		const errors = validationResult(req)
		try {
			if (!errors.isEmpty()) {
				return res.status(400).send("Invalid email address. Please try again.")
			}

			// Check if user already exists
			const userExist = await User.findOne({email: req.body.email})

			if(userExist){
				return res.status(400).send("User already exists")
			}

			// Encrypt passwords

			const salt = await bcrypt.genSalt(10)

			const encryptedPassword = await bcrypt.hash(req.body.password, salt)

			// Create a new user
			const user = new User({
				name: req.body.name,
				email: req.body.email,
				password: encryptedPassword 
			})
			const savedUser = await user.save()
			res.send(savedUser)
		} catch(error) {
			res.status(400).send(error)
		}
	}
)

router.post("/login", async(req, res) => {
	const errors = validationResult(req)
	try {
		if (!errors.isEmpty()) {
			return res.status(400).send("Invalid email address. Please try again.")
		}

		// Check if user exists
		const user = await User.findOne({email: req.body.email})

		if(!user){
			return res.status(400).send("Email or password is wrong!")
		}

		// Check if password is correct
		const validPassword = await bcrypt.compare(req.body.password, user.password)

		if(!validPassword){
			return res.status(500).send("Email or password is wrong!")
		}

		// Create and assign a jwt token

		const token = jwt.sign({__id: user.id}, process.env.TOKEN!)

		res.header("auth-token", token).send("Logged in")


	} catch (error) {
		res.status(400).send("Something went wrong!")
	}
})

router.get("/verify-user", verify, async(req, res) => {
	try {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const userId = req.user.id

		const userData = await User.findOne({__id: userId})

		console.log(userData)
		res.send(userData)

	} catch (error) {
		res.status(500).send(error)
	}
})

export default router