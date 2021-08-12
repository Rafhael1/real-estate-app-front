import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { RootStore } from "../../../../../redux/store"

import axios from "../../../../../utils/api/axios"

const NewPropertyForm = () => {

	const [propertyInfo, setPropertyInfo] = useState({
		title: "",
		description: "",
		address: "",
		country: "",
		price: "",
		status: "",
	})

	const [image1, setImage1] = useState(null)
	const [image2, setImage2] = useState(null)
	const [image3, setImage3] = useState(null)
	const [image4, setImage4] = useState(null)
	const [image5, setImage5] = useState(null)

	const {
		title,
		description,
		address,
		country,
		price,
		status,
	} = propertyInfo

	const onChangeHandler = (e: any) => {
		setPropertyInfo({
			...propertyInfo,
			[e.target.name]: e.target.value 
		})
	}

	const onSubmitHandler = async (e: any) => {
		e.preventDefault()
		try {
			const formData: any = new FormData()
			formData.append("images", image1)
			formData.append("images", image2)
			formData.append("images", image3)
			formData.append("images", image4)
			formData.append("images", image5)

			const obj = {
				hello: "world"
			}
			const json = JSON.stringify(obj)
			formData.append("body", json)
    
			const res = await axios.post("/upload", formData) 
    
			console.log(res)
    
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={(e) => onSubmitHandler(e)} >
			<input type="file" name="images" onChange={(e: any) => setImage1(e.target.files[0])} />
			<input type="file" name="images" onChange={(e: any) => setImage2(e.target.files[0])} />
			<input type="file" name="images" onChange={(e: any) => setImage3(e.target.files[0])} />
			<input type="file" name="images" onChange={(e: any) => setImage4(e.target.files[0])} />
			<input type="file" name="images" onChange={(e: any) => setImage5(e.target.files[0])} />
			<button type="submit" >Submit</button>
		</form>
	)
}

export default NewPropertyForm