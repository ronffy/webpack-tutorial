
import React from 'react';
import Button from '../../src/components/Button/Button';
import renderer from 'react-test-renderer';

test('test component Button', () => {
  let result = false;
  function handleClick() {
    result = !result;
  }
  const component = renderer.create(
    <Button onClick={handleClick}>点我</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree!.props.onClick();
  expect(result).toBeTruthy();

  tree!.props.onClick();
  expect(result).toBeTruthy();
});
