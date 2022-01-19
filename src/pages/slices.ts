import { reducer as formReducer } from 'redux-form'

import globalReducer from '../redux/globalSlices/reducers'
import Login from './common/auth/login/login.slices'
// import  Register  from './User/Auth/Register/redux/reducer'

export default {
  form: formReducer,
  globalReducer,
  Login
  // Register
}
