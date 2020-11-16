import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Results from './components/results.js';

console.log('hiiiiiiiiiiii', render);
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
