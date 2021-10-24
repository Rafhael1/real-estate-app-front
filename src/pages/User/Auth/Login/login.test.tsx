/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { shallow } from 'enzyme'
import Login from '.'

const funcMock = jest.fn()

const props: any = {
  handleSubmit: funcMock,
}

it('Expect', () => {
  expect(shallow(<Login {...props} />)).toMatchSnapshot()
})