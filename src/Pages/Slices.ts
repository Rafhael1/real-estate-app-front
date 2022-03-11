import { reducer as formReducer } from 'redux-form';

import globalReducer from '../Redux/GlobalSlices/slices';
import Login from './Auth/Login/Login.slices';
// import  Register  from './User/Auth/Register/redux/reducer'

export default {
  form: formReducer,
  globalReducer,
  Login
  // Register
};
