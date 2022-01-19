import { createSlice } from '@reduxjs/toolkit'
import { IState } from './login.types'
import { login } from './login.actions'

export const initialState: IState = {
  isLoading: false,
  hasError: false,
  isUserLogged: false
}

// @ts-ignore
const loginSlices = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state) => {
      (state.isLoading = false), (state.isUserLogged = true)
    },
    [login.rejected]: (state) => {
      (state.hasError = true), (state.isLoading = false)
    }
  }
})

export default loginSlices.reducer
