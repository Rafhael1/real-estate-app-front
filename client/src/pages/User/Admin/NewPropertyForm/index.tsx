import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { RootStore } from "../../../../redux/store"

import { Form, Field, reduxForm } from "redux-form"

import axios from "../../../../utils/api/axios"

const NewPropertyForm = ({ handleSubmit }: any) => {

	// const [propertyInfo, setPropertyInfo] = useState({
	// 	title: "",
	// 	description: "",
	// 	address: "",
	// 	country: "",
	// 	price: "",
	// 	status: "",
	// })

	// const [image1, setImage1] = useState(null)
	// const [image2, setImage2] = useState(null)
	// const [image3, setImage3] = useState(null)
	// const [image4, setImage4] = useState(null)
	// const [image5, setImage5] = useState(null)

	// const {
	// 	title,
	// 	description,
	// 	address,
	// 	country,
	// 	price,
	// 	status,
	// } = propertyInfo

	// const onChangeHandler = (e: any) => {
	// 	setPropertyInfo({
	// 		...propertyInfo,
	// 		[e.target.name]: e.target.value 
	// 	})
	// }

	// const onSubmitHandler = async (e: any) => {
	// 	e.preventDefault()
	// 	try {
	// 		const formData: any = new FormData()
	// 		formData.append("images", image1)
	// 		formData.append("images", image2)
	// 		formData.append("images", image3)
	// 		formData.append("images", image4)
	// 		formData.append("images", image5)

	// 		const obj = {
	// 			hello: "world"
	// 		}
	// 		const json = JSON.stringify(obj)
	// 		formData.append("body", json)
    
	// 		const res = await axios.post("/upload", formData) 
    
	// 		console.log(res)
    
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	const dispatch = useDispatch()

	return (
		<Form onSubmit={handleSubmit((e: any) => dispatch(addNewRealEstate(e)))} >
			<Field name="title" type="text" />
			<Field name="description" type="text" />
			<Field name="address" type="text" />
			<Field name="country" type="text" />
			<Field name="price" type="text" />
			<Field name="status" type="text" />

			<Field name="image1" type="file" />
			<Field name="image2" type="file" />
			<Field name="image3" type="file" />
			<Field name="image4" type="file" />
			<Field name="image5" type="file" />
			<button type="submit" >Submit</button>
		</Form>
	)
}

export default reduxForm({
	form: "NewPropertyForm"
})(NewPropertyForm)