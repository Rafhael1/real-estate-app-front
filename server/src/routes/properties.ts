import express from "express"

const router = express.Router()

import verify from "./verifyToken"


router.get("/properties", verify, async (req, res) => {
	

	

	res.send("Doidera")


})

export default router

