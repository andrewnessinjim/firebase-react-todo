import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoApp from './App';
import { FirebaseAppProvider } from '../infra/FirebaseProvider';

test('renders current toods header', () => {
  render(
    <FirebaseAppProvider>
      <TodoApp />
    </FirebaseAppProvider>);
  const linkElement = screen.getByText(/Current Todos/i);
  expect(linkElement).toBeInTheDocument();
});
