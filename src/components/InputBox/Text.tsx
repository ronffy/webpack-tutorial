import React, { SFC, MouseEventHandler } from 'react';

interface Props {
  name: string
  children: React.ReactNode
  onClick?: MouseEventHandler
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
