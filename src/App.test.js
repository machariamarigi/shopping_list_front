import React from 'react';
import App from './App';

describe('App', () => {
  it('Renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });

  test('snapshots', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
