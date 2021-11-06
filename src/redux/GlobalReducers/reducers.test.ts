import reducer /*, { isLoggedSlices }*/ from './reducers'

// const { isLogged } = isLoggedSlices.actions

describe('Tests global reducers', () => {
  // @ts-ignore
  expect(reducer(undefined, {})).toEqual(
    {
      isLoading: false,
      isAuthenticated: false,
    }
  )
})