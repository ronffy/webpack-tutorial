
import * as React from 'react';
import ButtonCounter from '../components/ButtonCounter';

type Props = {
  xxx: any
}

const About = (props: Props) => {
  console.log('xxx', props.xxx);
  
  return (
    <ButtonCounter />
  )
};

export default About;
