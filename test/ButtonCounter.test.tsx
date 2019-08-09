import ButtonCounter from '../src/components/ButtonCounter/ButtonCounter';
import renderer from 'react-test-renderer';

test('test component ButtonCounter', () => {

  const component = renderer.create(
    <ButtonCounter />
  );

  let tree = component.toJSON();
  console.log('tree', tree);
  
  tree!.props.handleIncrement();

})
