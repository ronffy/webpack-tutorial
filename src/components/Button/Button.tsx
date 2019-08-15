import React, { SFC, MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler
  color?: string
}

const defaultProps = {
  color: 'blue',
}

const Button: SFC<Props> = React.memo(({
  onClick,
  color,
  children
}) => (
    <button
      onClick={onClick}
      style={{ color }}
    >
      {children}
    </button>
  ));

Button.defaultProps = defaultProps;

export default Button;
