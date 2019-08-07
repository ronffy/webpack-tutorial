import React, { SFC } from 'react';
import { NodeProps } from '../../types';

interface Props extends NodeProps {
  name: string;
}

const Text: SFC<Props> = React.memo((props: Props) => {
  const { name, children, onClick } = props;
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
      {children}
    </div>
  )
});

export default Text
