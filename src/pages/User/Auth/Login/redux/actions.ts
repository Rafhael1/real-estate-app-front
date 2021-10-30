import axios from '../../../../../utils/api/axios'
import { Dispatch } from 'redux'
import { UserType } from '../types'
import { 
  LoginDispatchTypes,
  ACTIONS,
} from '../types'

export const login = (values: UserType) => async (dispatch:Dispatch<LoginDispatchTypes>) => {
  dispatch({
    type: ACTIONS.LOGIN_REQUEST
  })

  try {
    const res = await axios.post('/user/login', values)
    if(res.data.records.authToken) {
      if(values.rememberMe) {
        localStorage.setItem('authToken', res.data.records.authToken)
      } else {
        sessionStorage.setItem('authToken', res.data.records.authToken)
      }
    }
    dispatch({
      type: ACTIONS.LOGIN_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ACTIONS.LOGIN_ERROR
    })
  }
}