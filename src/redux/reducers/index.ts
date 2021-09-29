import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { RealEstates } from './RealEstates'
import { Auth } from './Auth'

export const reducers = combineReducers({
	form: formReducer,
	Auth,
	RealEstates
})