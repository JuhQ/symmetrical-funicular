import { render, screen } from '@testing-library/react';

import App from './App';

test('renders hei maailma link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hei maailma/i);
  expect(linkElement).toBeInTheDocument();
});
