/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

const verify = (req: Request, res: Response, next: () => void) => {
	const token = req.body.headers.authToken
	if(!token) {
		return res.status(500).send("Access Denied")
	}
	try {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const verified = jwt.verify(token, process.env.TOKEN!)
		// @ts-ignore
		req.user = verified

		next()
		
	} catch (error) {
		res.status(400).send("Invalid Token")
	}
}

export default verify