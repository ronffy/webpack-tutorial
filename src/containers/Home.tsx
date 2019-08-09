
import * as React from 'react';
import Collapse from '../components/Collapse';

const Home = () => {

  return (
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
  )
};

export default Home;
