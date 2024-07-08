import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutonomySol link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AutonomySol/i);
  expect(linkElement).toBeInTheDocument();
});
