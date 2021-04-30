import { render, screen } from '@testing-library/react';
// import App from './App';
// import { Provider } from 'react-redux'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { NameContext, NameProvider, NameConsumer } from '../react-context'
import Articles from './Articles';
import NavBar from './NavBar';

// jest.mock("articles_url", () => ({
//   setBlogData: () => ({ name: "mock name" })
// }));

// describe("User", () => {
//   it("should display user name", async () => {
//     render(<Articles/>);

//     const userName = await screen.findByText("mock name");

//     expect(userName).toBeTruthy();
//   });
// });

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
// test('NameConsumer shows default value', () => {
//   render(<NameConsumer />)
//   expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
//     'My Name Is: Unknown'
//   )
// })

// test('renders login with google link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Login with Google/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const { getByText } = render(<Provider store={store}><App /></Provider>)

// jest.mock('react-redux', () => {
//   const ActualReactRedux = jest.requireActual('react-redux');
//   return {
//       ...ActualReactRedux,
//       useDispatch: jest.fn().mockImplementation(() => {
//           return mockState;
//       }),
//   };
// });

describe('Nav', () => {
  test('renders App component', () => {
    render(<NavBar />);
 
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });
});

