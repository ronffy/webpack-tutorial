
import * as React from 'react';
import Tabs from './components/Tabs';
const { TabPane } = Tabs;

type PaneProps = {
  key: string | number;
  tab: React.ReactNode;
  content: React.ReactNode;
}

type Props = {
  activeKey?: string;
  tabs: PaneProps[];
}

type State = Readonly<{
  activeKey: string;
}>

class TabsContainer extends React.PureComponent<Props ,State> {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.activeKey
    }
  }
  handleChange = (activeKey: string) => {
    this.setState({
      activeKey
    })
  }

  handleClick = (e) => {
    
  }
  render() {
    const { tabs } = this.props;
    const { activeKey } = this.state;
    return (
      <Tabs
        activeKey={activeKey}
        onChange={this.handleChange}
        onTabClick={this.handleClick}
      >
        {tabs.map(({ key, tab, content }) => <TabPane key={key} tab={tab}>{content}</TabPane>)}
      </Tabs>
    )
  }
}

export default TabsContainer;