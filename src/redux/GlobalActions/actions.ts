/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/api/axios'

export const isLogged: any = createAsyncThunk('isLogged', async () => {
  try {
    const res: boolean = (await axios.post('/user/verify-user')).records
    return res
  } catch (error) {
    return error
  }
})
