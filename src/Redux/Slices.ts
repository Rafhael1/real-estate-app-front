import { reducer as formReducer } from 'redux-form';

import Auth from 'Services/Auth/Auth.slices';
import Snackbar from 'Services/Snackbar/Snackbar.slices';
import Search from 'Services/Search/Search.slices';

export default {
  form: formReducer,
  Auth,
  Snackbar,
  Search
};
