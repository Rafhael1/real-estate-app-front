import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

import  Login  from './User/Auth/Login/redux/reducer'
// import  Register  from './User/Auth/Register/redux/reducer'

export const reducers = combineReducers({
  form: formReducer,
  Login,
  // Register
})