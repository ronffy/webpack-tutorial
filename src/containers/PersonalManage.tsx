import * as React from 'react';
import Tabs from '../components/Tabs';
import { Action } from 'redux';
import { connect, MapDispatchToProps, DispatchProp, MapStateToProps } from 'react-redux';
import { RootState } from '../config/types';
const { TabPane } = Tabs;

type PaneProps = {
  key: string | number
  tab: React.ReactNode
  content: React.ReactNode
}

type OwnProps = {}

interface DispatchProps extends DispatchProp<Action> {
  onChangeActiveKey: (activeKey: string) => void
}

type StateProps = {
  activeKey: string
  tabs: PaneProps[]
}

type Props = StateProps & DispatchProps & OwnProps


class PersonalManage extends React.PureComponent<Props> {

  render() {
    const { tabs, activeKey, onChangeActiveKey } = this.props;
    return (
      <Tabs
        activeKey={activeKey}
        onChange={onChangeActiveKey}
      >
        {tabs.map(({ key, tab, content }) => <TabPane key={key} tab={tab}>{content}</TabPane>)}
      </Tabs>
    )
  }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({ personal }) => ({
  tabs: personal.tabs,
  activeKey: personal.activeKey,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
  dispatch,
  onChangeActiveKey(activeKey: string) {
    dispatch({
      type: 'PERSONAL_ACTIVEKEY',
      payload: {
        activeKey
      }
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalManage);
