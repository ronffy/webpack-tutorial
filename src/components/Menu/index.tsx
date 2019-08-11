import React, { SFC, CSSProperties, isValidElement } from 'react';
import classNames from 'classnames';
import Item from './Item';
import './index.less';

export interface ClickParam {
  key: string,
  // keyPath: Array<string>,
  item: any,
  domEvent: Event,
}

interface Props {
  onClick?: (param: ClickParam) => void,
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
class Menu extends React.PureComponent<Props> {
  static Item = Item;

  render() {
    const {
      selectedKeys,
      openKeys,
      onClick,
      onOpenChange,
      mode = 'vertical',
      children,
      style,
      className,
    } = this.props;
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
              onClick(e: Event) {
                const param: ClickParam = {
                  item: _props,
                  key: _key ? `${_key}` : '',
                  domEvent: e,
                };
                onClick && onClick(param);
              }

            }

            return React.cloneElement(child, newProps, _props.children)
          })
        }
      </div>
    )
  }
}

export default Menu;
