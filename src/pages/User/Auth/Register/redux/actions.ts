import axios from '../../../../../utils/api/axios'
import { Dispatch } from 'redux'
import { 
  CreateUserDispatchTypes,
  UserType, 
  ACTIONS,
} from '../types'

export const createUser = (values: UserType) => async (dispatch: Dispatch<CreateUserDispatchTypes>) => {
  dispatch({
    type: ACTIONS.CREATE_USER_REQUEST
  })
  try {
    const res = await axios.post('/user/register',
      values
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
