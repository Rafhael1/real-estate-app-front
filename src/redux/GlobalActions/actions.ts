import axios from '../../utils/api/axios'
import { Dispatch } from 'redux'
import { 
  IsLoggedDispatchTypes, 
  ACTIONS,
} from '../types'

export const isLogged = () => async (dispatch: Dispatch<IsLoggedDispatchTypes>) => {
  dispatch({ type: ACTIONS.IS_LOGGED_REQUEST })
  try {
    const res = await axios.post('/user/verify-user', {
    })
    dispatch({
      type: ACTIONS.IS_LOGGED_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({ type: ACTIONS.IS_LOGGED_ERROR })
  }
}