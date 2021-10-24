import React from 'react'
import { shallow } from 'enzyme'
import Register from '.'

it('Expect', () => {
  expect(shallow(<Register />)).toMatchSnapshot()
})