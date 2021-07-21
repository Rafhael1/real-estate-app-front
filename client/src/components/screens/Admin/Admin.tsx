import React, { useState } from "react"

import axios from "../../utils/api/axios"

// Styles

import { Input } from "./Admin.Style"
import NewPropertyForm from "./NewPropertyForm/NewPropertyForm"

const Admin = () => {

	// States
	const [ file1, setFile1 ]: any = useState(null)


	const [ title, setTitle ] = useState("Cabana")
	const [ description, setDescription ] = useState("Not description")
	const [ address, setAddress ] = useState("A address placeholder")
	const [ country, setCountry ] = useState("Country")
	const [ price, setPrice ] = useState("1234124")
	const [ status, setStatus ] = useState("Sold out")
    
	const api = async (e: any) => {
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
			<NewPropertyForm />
		</div>
	)
}

export default Admin