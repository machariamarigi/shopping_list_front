import raf from './tempPolyfills';

import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make enzyme and react-test-renderer functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;


// Mock local storage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
