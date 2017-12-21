import React from 'react';
import App from './App';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

it('renders without crashing', () => {
  shallow(<App />);
});
