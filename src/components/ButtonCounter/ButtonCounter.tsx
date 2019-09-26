import React, { useState, SFC } from 'react';
import Button from '../Button';

type Props = {
  count: number
}

const ButtonCounter: SFC<Props> = (props) => {
  const [count, setCount] = useState(props.count);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>加</Button>
      <Button onClick={() => setCount(count - 1)}>减</Button>
      <div>
        计数值是: {count}
      </div>
    </div>
  )
}

export default ButtonCounter;
