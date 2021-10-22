import axios from '../../../../../utils/api/axios'
import { Dispatch } from 'redux'

import { 
  LoginDispatchTypes,
  ACTIONS,
} from '../types'

export const login = (values: any) => async (dispatch:Dispatch<LoginDispatchTypes>) => {
  dispatch({
    type: ACTIONS.LOGIN_REQUEST
  })
  const body = values
  try {
    const res = await axios.post('/user/login', body)
    if(res.data.authToken) {
      if(values.rememberMe) {
        localStorage.setItem('authToken', res.data.authToken)
      } else {
        sessionStorage.setItem('authToken', res.data.authToken)
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