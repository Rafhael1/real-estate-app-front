import { reducer as formReducer } from 'redux-form';

import Auth from 'Services/Auth/Auth.slices';
import Snackbar from 'Services/Snackbar/Snackbar.slices';

export default {
  form: formReducer,
  Auth,
  Snackbar
};
