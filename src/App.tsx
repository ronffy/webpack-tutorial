
import * as React from 'react';
import InputBox from './components/InputBox';
import ButtonCounter from './components/ButtonCounter';
import Collapse from './components/Collapse';

const App = () => (
  <div>
    <InputBox />
    <hr />
    <ButtonCounter />
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
  </div>
)

export default App;