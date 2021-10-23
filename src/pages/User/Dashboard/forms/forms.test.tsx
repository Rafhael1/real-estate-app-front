/* eslint-disable @typescript-eslint/no-empty-function */
import thunk from "redux-thunk"
import * as ActionCreators from "../redux/actions"
import React from 'react'
import "../../../../setupTests"
import expect from "expect"
import moxios from "moxios"
import configureMockStore from "redux-mock-store"
const middleware = [thunk]
const mockStore = configureMockStore(middleware)
import { shallow } from 'enzyme'
import NewPropertyForm from './newPropertyForm'


const props: any = {
  handleSubmit: () => {},
}

const initialState = {
  isLoading: false,
  realEstates: []
}
const postProperties = {
  title: 'placeholder',
  description: 'placeholder',
  address: 'placeholder',
  country: 'placeholder',
  price: 'placeholder',
  status: 'placeholder',
  images: []
}

describe('New Property form', () => {
  let store
  beforeEach(() => {
    moxios.install()
    store = mockStore(initialState)
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('Should render new property form correctly', () => {
    expect(shallow(<NewPropertyForm {...props} />)).toMatchSnapshot()
  })


  it('Should test the get properties action with error', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request?.respondWith({
        status: 200,
        response: [postProperties]
      })
    })
    const expectedActions = [
      {
        type: "GET_REAL_ESTATES_REQUEST",
      },
      {
        type: "GET_REAL_ESTATES_ERROR",
      },
    ]
    return store.dispatch(ActionCreators.getRealEstates()).then(() => {
      const actualAction = store.getActions()
      expect(actualAction).toEqual(expectedActions)
      done()
    })
  })

  it('Should test the add new property action with error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request?.respondWith({
        status: 200,
      })
    })
    const exptectedActions = [
      {
        type: "ADD_NEW_REAL_STATE_REQUEST"
      },
      {
        type: "ADD_NEW_REAL_STATE_ERROR"
      },
    ]
    return store.dispatch(ActionCreators.addNewRealEstate(postProperties)).then(() => {
      const actualAction = store.getActions()
      expect(actualAction).toEqual(exptectedActions)
    })
  })
})
