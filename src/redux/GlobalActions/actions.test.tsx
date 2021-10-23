/* eslint-disable prefer-const */
import thunk from "redux-thunk"
import * as ActionCreators from "./actions"
import "../../setupTests"
import expect from "expect"
import moxios from "moxios"
import configureMockStore from "redux-mock-store"
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Test generic actions', () => {
  let store
  beforeEach(() => {
    moxios.install()
    store = mockStore()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('Test isLogged action', async () => {
    const expectedActions = [
      {
        type: 'IS_LOGGED_REQUEST'
      },
      //   {
      //     type: 'IS_LOGGED_SUCCESS',
      //     payload: true
      //   },
      {
        type: 'IS_LOGGED_ERROR'
      }
    ]
    await store.dispatch(ActionCreators.isLogged())
    const actions = store.getActions()
    expect(actions).toEqual(expectedActions)
  })
})