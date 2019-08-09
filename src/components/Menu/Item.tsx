import React, { SFC } from 'react';

interface Props {
  onClick?: OnClick<HTMLButtonElement>,
  color?: string,
}

const defaultProps = {
  color: 'blue',
}

const Item: SFC<Props> = React.memo(({
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

Item.defaultProps = defaultProps;

export default Item;
