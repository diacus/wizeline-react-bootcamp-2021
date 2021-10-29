import { render, screen } from '@testing-library/react';
import Lecture from './Lecture';

test('renders learn react link', () => {
  render(<Lecture />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
