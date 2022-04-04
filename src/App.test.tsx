import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoApp from './App';

test('renders learn react link', () => {
  render(<TodoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
