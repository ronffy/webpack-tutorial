
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import ButtonCounter from '../components/ButtonCounter';
import Context from '../context';

type Props = {
  xxx: any
}

const About = (props: Props) => {
  console.log(props.xxx);
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(4);
    }, 1000);
  }, [1]);

  const store = useContext(Context);

  return (
    <div style={{ background: store.color }}>
      {
        count
          ? <ButtonCounter count={4} />
          : 'loading'
      }
    </div>
  )
};

export default About;
