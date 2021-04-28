import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Nav', () => {
//   test('renders App component', () => {
//     render(<Navbar1 />);
 
//     expect(screen.getByText(/Search/)).toBeInTheDocument();
//   });
// });

