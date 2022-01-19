import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../../utils/api/axios'
import { UserType } from './register.types'

export const register = createAsyncThunk(
  'register',
  async (values: UserType) => {
    try {
      await axios.post('/user/register', values)
    } catch (error) {
      return error
    }
  }
)

// export const createUser = (values: UserType) => async (dispatch: Dispatch<CreateUserDispatchTypes>) => {
//   dispatch({
//     type: ACTIONS.CREATE_USER_REQUEST
//   })
//   try {
//     const res = await axios.post('/user/register',
//       values
//     )

//     dispatch({
//       type: ACTIONS.CREATE_USER_SUCCESS,
//       payload: res
//     })
//   } catch (error) {
//     dispatch({
//       type: ACTIONS.CREATE_USER_ERROR
//     })
//   }
// }
