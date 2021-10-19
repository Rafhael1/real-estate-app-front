import axios from '../../../../../utils/api/axios'
import { Dispatch } from 'redux'
import { 
	CreateUserDispatchTypes, 
	ACTIONS,
} from '../types'

export const createUser = (values: any = {}) => async (dispatch: Dispatch<CreateUserDispatchTypes>) => {
	const body = {
		name: values.name || '',
		email: values.email || '',
		password: values.password || '',
	}
	dispatch({
		type: ACTIONS.CREATE_USER_REQUEST
	})
	try {
		const res = await axios.post('/user/register',
			body
		)

		dispatch({
			type: ACTIONS.CREATE_USER_SUCCESS,
			payload: res
		})
	} catch (error) {
		dispatch({
			type: ACTIONS.CREATE_USER_ERROR
		})
	}
}
