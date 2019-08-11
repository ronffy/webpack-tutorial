
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Menu, { ClickParam } from '../../components/Menu';
const MenuItem = Menu.Item;

type Props = {
  onClickMemuItem: (param: ClickParam) => void,
  menuSelectedKeys: string[],
  menuOpenKeys: string[],
}

class Header extends React.PureComponent<Props> {

  _handleClickMenuItem = (o: ClickParam) => {
    const { onClickMemuItem } = this.props;
    onClickMemuItem(o);
  }

  render() {
    const { 
      // menus, 
      menuSelectedKeys, 
      menuOpenKeys,
      // onMenuOpenChange,
    } = this.props;
    return (
      <Menu
        openKeys={menuOpenKeys}
        selectedKeys={menuSelectedKeys}
        onClick={this._handleClickMenuItem}
        // onOpenChange={onMenuOpenChange}
      >
        <MenuItem key="/home" >菜单1</MenuItem>
        <MenuItem key="/detail">菜单2</MenuItem>
        <MenuItem key="/personal">菜单3</MenuItem>
        <MenuItem key="/about">菜单4</MenuItem>
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
  onClickMemuItem({ key, item, domEvent }: ClickParam) {
    dispatch({
      type: 'APP_UPDATESTATE',
      payload: {
        menuSelectedKeys: [key]
      }
    })
    dispatch(push(key));
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
