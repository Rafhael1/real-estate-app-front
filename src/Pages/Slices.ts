import { reducer as formReducer } from 'redux-form';

import Auth from 'Services/Auth/Auth.slices';

export default {
  form: formReducer,
  Auth
};
