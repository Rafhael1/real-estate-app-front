/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { shallow } from 'enzyme'
import NewPropertyForm from './newPropertyForm'


const props: any = {
  handleSubmit: () => {},
}

it('Should render new property form', () => {
  expect(shallow(<NewPropertyForm {...props} />)).toMatchSnapshot()
})