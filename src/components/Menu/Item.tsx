import React, { SFC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: MouseEventHandler<HTMLLIElement>
  className?: string
  active?: boolean
}

const Item: SFC<Props> = React.memo(({
  onClick,
  children,
  className,
  active,
}) => (
    <li
      className={classNames('comp-menu-item', className, { active })}
      onClick={onClick}
    >
      {children}
    </li>
  ));

export default Item;
