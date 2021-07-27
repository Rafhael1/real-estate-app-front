import React, { useState } from "react"

import axios from "../../utils/api/axios"

const Register = () => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")


	const onSubmit = async (e: any) => {
		e.preventDefault()

		const body = {
			name,
			email,
			password
		}

		const res = await axios.post("/user/register", {
			headers: {
				"Content-Type": "application/json",
			},
			body: body
		})
		console.log(res)
	}

	return (
		<form onSubmit={(e) => onSubmit(e)}>
			<input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
			<input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
			<button type="submit" >Send</button>
		</form>
	)
}

export default Register