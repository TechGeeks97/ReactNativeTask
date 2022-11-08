import React from 'react';

import {
  fireEvent,
  render,
  act,
  waitFor,
  renderHook,
} from '@testing-library/react-native';
import Home from '../src/screens/home/home';
import searchHook from '../src/hooks/search-hook';

test('Should apply the value when changing text', () => {
  const {getByTestId} = render(<Home />);
  const input = getByTestId('search');
  fireEvent.changeText(input, 'Ma');
  expect(input.props.value).toBe('Ma');
});

it('should call serach function', async () => {
  jest.useFakeTimers();
  const {getByTestId} = render(<Home />);
  const {result} = renderHook(() => searchHook());

  expect(result.current.userInfo).toBe('');
  await act(async () => {
    // Note that you should wrap the calls to functions your hook returns with `act` if they trigger an update of your hook's state to ensure pending useEffects are run before your next assertion.
    await result.current.search('ab');
  });

  expect(result.current.userInfo.name).toBe('ab');
});
