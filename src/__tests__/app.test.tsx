import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'
import App from '../App';

describe('<App />', () => {
  test('should be defined', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toBeDefined();
  });
})
