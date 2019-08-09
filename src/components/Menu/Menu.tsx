import React, { SFC, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { OnClick } from '../../config/types';
import './index.less';

interface Props {
  onClick?: OnClick<HTMLMenuElement>,
  color?: string,
  style?: CSSProperties
}

const defaultProps = {
  color: 'blue',
}

/**
 * @param {string[]} openKeys 当前展开的 SubMenu 菜单项 key 数组
 * @param {string[]} selectedKeys 当前选中的菜单项 key 数组
 * @param {Function} onClick 点击 MenuItem 调用此函数
 * @param {String} mode 菜单类型，现在支持垂直、水平、和内嵌模式三种 vertical horizontal inline
 */
const Menu: SFC<Props> = React.memo(({ 
  selectedKeys, 
  openKeys, 
  onClick, 
  mode = 'vertical', 
  style,
}) => (
    <div className="menu clearfix" style={style}>
      <NavLink to="/home" >首页</NavLink>
      <NavLink to="/personal" >个人中心</NavLink>
      <NavLink to="/detail" >详情</NavLink>
      <NavLink to="/about" >关于</NavLink>
    </div>
  ));

Menu.defaultProps = defaultProps;

export default Menu;
