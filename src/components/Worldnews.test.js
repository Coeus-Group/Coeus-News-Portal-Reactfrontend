import React from 'react';
import { render, fireEvent, screen } from './test-utils';
import WorldNews from './Worldnews'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Component test', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
    });
    it('should render with given state from Redux store', () => {
        // render(<WorldNews />, { initialState: { user: 'Srividya' } });
        // expect(screen.getByText(/London/i)).toBeInTheDocument();
    });
});