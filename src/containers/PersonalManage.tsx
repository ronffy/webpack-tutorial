import * as React from 'react';
import Tabs from '../components/Tabs';
import { connect } from 'react-redux';
const { TabPane } = Tabs;

type PaneProps = {
  key: string | number;
  tab: React.ReactNode;
  content: React.ReactNode;
}

type Props = {
  activeKey: string;
  onChangeActiveKey: (activeKey: string) => void,
  tabs: PaneProps[];
}


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

const mapStateToProps = ({ personal }) => ({
  tabs: personal.tabs,
  activeKey: personal.activeKey,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveKey(activeKey: string) {
    dispatch({
      type: 'PERSONAL_ACTIVEKEY',
      payload: {
        activeKey
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalManage);
