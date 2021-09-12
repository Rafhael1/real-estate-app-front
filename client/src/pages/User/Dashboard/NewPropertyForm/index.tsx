import React from "react"

import { useDispatch } from "react-redux"


import { Form, Field, reduxForm } from "redux-form"

import { addNewRealEstate } from "../../../../redux/actions/RealEstates"

import renderFileInput from "components/fields/inputFileField"

const NewPropertyForm = ({ handleSubmit }: any): JSX.Element => {

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
		<Form onSubmit={handleSubmit((values: any) => dispatch(addNewRealEstate(values)))} >
			<Field name="title" component="input"  type="text" />
			<Field name="description" component="input"  type="text" />
			<Field name="squareMeter" component="input"  type="number" />
			<Field name="bathrooms" component="input"  type="number" />
			<Field name="bedrooms" component="input"  type="number" />
			<Field name="address" component="input"  type="text" />
			<Field name="country" component="input"  type="text" />
			<Field name="price" component="input"  type="text" />
			<Field name="status" component="input"  type="text" />
			<Field name="image1" component={renderFileInput}  />
			<Field name="image2" component="input"  type="file" />
			<Field name="image3" component="input"  type="file" />
			<Field name="image4" component="input"  type="file" />
			<Field name="image5" component="input"  type="file" />
			<button type="submit" >Submit</button>
		</Form>
	)
}

export default reduxForm({
	form: "NewPropertyFormRedux"
})(NewPropertyForm)