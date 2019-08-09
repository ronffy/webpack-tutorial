import React, { SFC } from 'react';
import { InputProps } from '../../config/types';

const Input: SFC<InputProps> = React.memo((props: InputProps) => {
  const { onChange, value, placeholder } = props;
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
});

export default Input
