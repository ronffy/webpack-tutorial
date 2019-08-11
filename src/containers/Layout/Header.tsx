
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Menu from '../../components/Menu';
const MenuItem = Menu.Item;

console.log(push);


class Header extends React.PureComponent {

  _handleClickMenuItem = (o) => {
    const { onClickMemuItem } = this.props;
    onClickMemuItem(o);
  }

  render() {
    const { 
      menus, 
      menuSelectedKeys, 
      menuOpenKeys,
      onClickMemuItem,
      onMenuOpenChange,
    } = this.props;
    return (
      <Menu
        openKeys={menuOpenKeys}
        selectedKeys={menuSelectedKeys}
        onClick={this._handleClickMenuItem}
        onOpenChange={onMenuOpenChange}
      >
        <MenuItem key="menu1" to="/home" >菜单1</MenuItem>
        <MenuItem key="menu2" to="/detail">菜单2</MenuItem>
        <MenuItem key="menu3" to="/personal">菜单3</MenuItem>
        <MenuItem key="menu4" to="/about">菜单4</MenuItem>
      </Menu>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  menus: app.menus,
  menuSelectedKeys: app.menuSelectedKeys,
  menuOpenKeys: app.menuOpenKeys,
});

const mapDispatchToProps = (dispatch) => ({
  onClickMemuItem({ key, keyPath, item, domEvent }) {
    dispatch({
      type: 'APP_UPDATESTATE',
      payload: {
        menuSelectedKeys: [key]
      }
    })
    dispatch(push(item.to));
  },
  onMenuOpenChange(openKeys) {
    dispatch({
      type: 'APP_UPDATESTATE',
      payload: {
        menuOpenKeys: [openKeys]
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
