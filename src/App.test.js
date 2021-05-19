import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn rails link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rails/i);
  expect(linkElement).toBeInTheDocument();
});
