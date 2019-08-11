import React, { SFC, CSSProperties, isValidElement } from 'react';
import classNames from 'classnames';
import './index.less';

interface Props {
  onClick?: Function,
  onOpenChange?: Function,
  selectedKeys: string[],
  openKeys?: string[],
  style?: CSSProperties,
  mode?: string,
  className?: string,
}


/**
 * @param {string[]} openKeys 当前展开的 SubMenu 菜单项 key 数组
 * @param {string[]} selectedKeys 当前选中的菜单项 key 数组
 * @param {function({ item, key, keyPath, domEvent })} onClick 点击 MenuItem 调用此函数
 * @param {String} mode 菜单类型，现在支持垂直、水平、和内嵌模式三种 vertical horizontal inline
 */
const Menu: SFC<Props> = React.memo(({ 
  selectedKeys, 
  openKeys, 
  onClick, 
  onOpenChange,
  mode = 'vertical', 
  children,
  style,
  className,
}) => {

  const classes = classNames('u-menu', className);


  return (
    <div className={classes} style={style}>
      {
        React.Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return null;
          }
          const _props = child.props;
          const _key = child.key;
          const newProps = {
            ..._props,
            className: classNames({
              'active': selectedKeys.includes((_key as string)),
            }),
            onClick(e: HTMLDivElement) {
              onClick && onClick({
                item: _props,
                key: _key,
                domEvent: e,
              })
            }

          }

          return React.cloneElement(child, newProps, _props.children)
        })
      }
    </div>
  )

});

export default Menu;
