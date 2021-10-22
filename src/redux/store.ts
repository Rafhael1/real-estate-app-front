import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { reducers } from '../pages/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootStore = ReturnType<typeof reducers>