import { reducer as formReducer } from 'redux-form'

import globalReducer from '../redux/GlobalReducers/reducers'
import Login from './Common/Auth/Login/redux/reducer'
// import  Register  from './User/Auth/Register/redux/reducer'

export default {
  form: formReducer,
  globalReducer,
  Login
  // Register
}
