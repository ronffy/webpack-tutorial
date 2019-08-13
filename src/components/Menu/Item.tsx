import React, { SFC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: MouseEventHandler<HTMLLIElement>
  className?: string,
}

const Item: SFC<Props> = React.memo(({
  onClick,
  children,
  className,
}) => (
    <li
      className={classNames('u-menu-item', className)}
      onClick={onClick}
    >
      {children}
    </li>
  ));

export default Item;
