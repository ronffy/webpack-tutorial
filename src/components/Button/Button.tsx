import React, { SFC } from 'react';
import { OnClick } from '../../types';

interface Props {
  onClick?: OnClick<HTMLButtonElement>,
  color?: string,
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
