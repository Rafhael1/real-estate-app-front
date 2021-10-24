import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

import globalReducer from '../redux/GlobalReducers/reducers'
import  Login  from './User/Auth/Login/redux/reducer'
// import  Register  from './User/Auth/Register/redux/reducer'

export const reducers = combineReducers({
  form: formReducer,
  globalReducer,
  Login,
  // Register
})