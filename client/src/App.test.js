import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
    render(<App />);
});

test('Toggle Button is rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/toggle-button/i);
})

test('H1 heading is rendered', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup/i);
})
