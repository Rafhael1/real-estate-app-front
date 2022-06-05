import reducer, { showSnackbar, hideSnackbar } from './Snackbar.slices';

test('should return the initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined
    })
  ).toEqual({
    isShowing: false,
    message: '',
    color: 'info'
  });
});

test('should handle showSnackbar', () => {
  const previousState = {};
  expect(
    reducer(previousState, showSnackbar({ message: 'test', color: 'success' }))
  ).toEqual({
    isShowing: true,
    message: 'test',
    color: 'success'
  });
});

test('should handle hideSnackbar', () => {
  const previousState = {};
  expect(reducer(previousState, hideSnackbar())).toEqual({
    isShowing: false
  });
});
