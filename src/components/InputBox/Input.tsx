import React, { SFC, ChangeEventHandler } from 'react';

type Props = {
  value?: string
  placeholder?: string
  onChange?: ChangeEventHandler
}

const Input: SFC<Props> = React.memo((props: Props) => {
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
