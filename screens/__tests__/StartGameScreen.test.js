import React from 'react';
import renderer from 'react-test-renderer';
import StartGameScreen from '../StartGameScreen';

test('renders correctly', () => {
  const tree = renderer.create(<StartGameScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
