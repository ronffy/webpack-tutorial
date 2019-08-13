import React, { SFC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string,
  title: string | React.ReactNode,
}

const SubMenu: SFC<Props> = React.memo(({
  onClick,
  children,
  className,
  title,
}) => (
    <li
      className={classNames('u-menu-sub', className)}
    >
      <div className="u-menu-sub-title" onClick={onClick}>{title}</div>
      <ul>
        {children}
      </ul>
    </li>
  ));

export default SubMenu;
