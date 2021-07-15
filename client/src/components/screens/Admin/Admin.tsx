import React, { useState } from "react"

import axios from "../../utils/api/axios"

// Styles

import { Input } from "./Admin.Style"

const Admin = () => {

	// States
	const [ file1, setFile1 ]: any = useState(null)


	const [ title, setTitle ] = useState("Cabana")
	const [ description, setDescription ] = useState("Not description")
	const [ address, setAddress ] = useState("A address placeholder")
	const [ country, setCountry ] = useState("Country")
	const [ price, setPrice ] = useState("1234124")
	const [ status, setStatus ] = useState("Sold out")
    
	const api = async(e: any) => {
		e.preventDefault()
		try {
			const formData: any = new FormData()
			formData.append("image", file1, file1.name)
			//formData.append('document', json);
			//formData.append('document', blob);
    
			const res = await axios.post("/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}) 
    
			console.log(res)
    
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<form onSubmit={(e: any) =>  api(e)}>
				<Input type="file" name="image" multiple onChange={(e: any) => setFile1(e.target.files[0])} />
				<button type="submit" >Submit</button>
			</form>
			<img src="http://localhost:8000/upload/1626304833754Screenshot%20from%202021-06-24%2010-38-48.png" width="500" height="600" />
		</div>
	)
}

export default Admin