
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Menu, { ClickParam, SubMenu, ClickSubParam } from '../../components/Menu';
const MenuItem = Menu.Item;

type Props = {
  onClickMemuItem: (param: ClickParam) => void,
  onClickSubMenu: (param: ClickSubParam) => void,
  onMenuOpenChange: (param: string[]) => void,
  menuSelectedKeys: string[],
  menuOpenKeys: string[],
}

class Header extends React.PureComponent<Props> {

  render() {
    const { 
      // menus, 
      menuSelectedKeys, 
      menuOpenKeys,
      onMenuOpenChange,
      onClickMemuItem,
    } = this.props;
    return (
      <div style={{ width: 200 }}>
        <Menu
          openKeys={menuOpenKeys}
          selectedKeys={menuSelectedKeys}
          onClick={onClickMemuItem}
          onOpenChange={onMenuOpenChange}
        >
          <MenuItem key="/home">菜单1</MenuItem>
          <MenuItem key="/detail">菜单2</MenuItem>
          <SubMenu title="我" key="me" >
            <MenuItem key="/personal">菜单3</MenuItem>
            <MenuItem key="/about">菜单4</MenuItem>
          </SubMenu>
        </Menu>
      </div>
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
  onMenuOpenChange(openKeys: string[]) {
    dispatch({
      type: 'APP_UPDATESTATE',
      payload: {
        menuOpenKeys: openKeys
      }
    })
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
