
import * as React from 'react';
import { connect, DispatchProp, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState, Action } from '../../config/types';
import Menu, { ClickParam, SubMenu, ClickSubParam } from '../../components/Menu';
const MenuItem = Menu.Item;

type StateProps = {
  menus: []
  menuSelectedKeys: string[]
  menuOpenKeys: string[]
}

interface DispatchProps extends DispatchProp<Action> {
  onClickMemuItem: (param: ClickParam) => void
  onClickSubMenu?: (param: ClickSubParam) => void
  onMenuOpenChange: (param: string[]) => void
}

type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps

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

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({ app }) => ({
  menus: app.menus,
  menuSelectedKeys: app.menuSelectedKeys,
  menuOpenKeys: app.menuOpenKeys,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
  dispatch,
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
