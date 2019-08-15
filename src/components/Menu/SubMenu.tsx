import React, { SFC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import Triangle from '../Triangle';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  title: string | React.ReactNode
  opened?: boolean
  active?: boolean
}

const SubMenu: SFC<Props> = React.memo(({
  onClick,
  children,
  className,
  title,
  opened,
  active,
}) => (
    <li
      className={classNames('comp-menu-sub', className, { opened, active })}
    >
      <div className="comp-menu-sub-title" onClick={onClick}>
        <span className="u-fl">{title}</span>
        <Triangle
          className="u-fr"
          type={opened ? 'top' : 'bottom'}
          size="small"
        />
      </div>
      <ul>
        {children}
      </ul>
    </li>
  ));

export default SubMenu;
