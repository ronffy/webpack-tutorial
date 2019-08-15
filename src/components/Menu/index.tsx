import React, { CSSProperties, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
import Item from './Item';
import SubMenu from './SubMenu';
import './index.less';

export interface ClickParam {
  key: string
  // keyPath: Array<string>
  item: any
  domEvent: Event
}

export interface ClickSubParam {
  key: string
  domEvent: Event
}

interface Props {
  selectedKeys?: string[]
  openKeys?: string[]
  style?: CSSProperties
  mode?: string
  className?: string
  onClick?: (param: ClickParam) => void
  onSubClick?: (param: ClickSubParam) => void
  onOpenChange?: (param: string[]) => void
}

const defaultProps = {
  mode: 'vertical',
  openKeys: [],
  selectedKeys: [],
}
type DefaultProps = typeof defaultProps;

/**
 * @param {string[]} openKeys 当前展开的 SubMenu 菜单项 key 数组
 * @param {string[]} selectedKeys 当前选中的菜单项 key 数组
 * @param {function({ item, key, keyPath, domEvent })} onClick 点击 MenuItem 调用此函数
 * @param {String} mode 菜单类型，现在支持垂直、水平、和内嵌模式三种 vertical horizontal inline
 */
class Menu extends React.PureComponent<Props> {
  static Item = Item;
  static defaultProps: DefaultProps = defaultProps;

  private eachChildToGetActive(children: ReactNode) {
    const { selectedKeys } = this.props;
    let active = false;
    console.time('s');
    const each = (_children: ReactNode) => {
      React.Children.forEach(_children, child => {
        if (!isValidElement(child)) {
          return;
        }
        if (active) {
          return;
        }
        const _key = child.key ? `${child.key}` : '';
        if (selectedKeys!.includes(_key)) {
          active = true;
        }
        const __children = child.props.children;
        if (__children) {
          each(__children);
        }
      })
    }
    each(children);
    console.timeEnd('s');
    return active;
  }

  private renderChildren = (children: Menu['props']['children']) => {
    const {
      selectedKeys,
      openKeys,
      // mode,
      onClick,
      onSubClick,
      onOpenChange,
    } = this.props;
    return React.Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return null;
      }
      const _props = child.props;
      const _key = child.key ? `${child.key}` : '';
      const isSubMenuNode = !!_props.title;

      // SubMenu 
      if (isSubMenuNode) {
        let newOpenKeys = [...openKeys!];
        const _keyIndex = openKeys!.indexOf(_key);
        _keyIndex !== -1 ? newOpenKeys.splice(_keyIndex, 1) : newOpenKeys.push(_key);
        
        
        const newProps = {
          ..._props,
          opened: newOpenKeys.includes(_key),
          active: this.eachChildToGetActive(_props.children),
          onClick(e: Event) {
            const param: ClickSubParam = {
              key: _key,
              domEvent: e,
            };
            onSubClick && onSubClick(param);
            onOpenChange && onOpenChange(newOpenKeys);
          }
        }

        return React.cloneElement(child, newProps, this.renderChildren(_props.children))
      }

      // Item 项
      const newProps = {
        ..._props,
        active: selectedKeys!.includes(_key),
        onClick(e: Event) {
          const param: ClickParam = {
            item: _props,
            key: _key,
            domEvent: e,
          };
          onClick && onClick(param);
        }
      }
      return React.cloneElement(child, newProps, _props.children);
    })
  }

  render() {
    const {
      mode,
      children,
      style,
      className,
    } = this.props;
    const classes = classNames('comp-menu', mode, className);

    return (
      <ul className={classes} style={style}>
        {
          this.renderChildren(children)
        }
      </ul>
    )
  }
}

export {
  SubMenu
}

export default Menu;
