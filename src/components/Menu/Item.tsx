import React, { SFC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string,
}

const Item: SFC<Props> = React.memo(({
  onClick,
  children,
  className,
}) => (
    <div
      className={classNames('u-menu-item', className)}
      onClick={onClick}
    >
      {children}
    </div>
  ));

export default Item;
