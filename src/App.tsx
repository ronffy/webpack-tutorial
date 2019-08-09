
import * as React from 'react';
import InputBox from './components/InputBox';
import ButtonCounter from './components/ButtonCounter';
import Collapse from './components/Collapse';
import TabsContainer from './containers/TabsContainer';
import './app.less';

const App = () => (
  <div>
    <InputBox />
    <hr />
    <ButtonCounter />
    <hr />
    <Collapse
      menu={[
        {
          id: 1,
          title: '折叠面板标题1',
          content: '折叠面板内容1',
        },
        {
          id: 2,
          title: '折叠面板标题2',
          content: '折叠面板内容2',
        }
      ]}
    />
    <TabsContainer
      activeKey="tab2"
      tabs={[
        {
          key: 'tab1',
          tab: 'tab标题1',
          content: 'tab内容1',
        },
        {
          key: 'tab2',
          tab: 'tab标题2',
          content: 'tab内容2',
        }
      ]}
    />
  </div>
)

export default App;