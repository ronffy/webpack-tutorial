
import * as React from 'react';
import InputBox from './components/InputBox';
import ButtonCounter from './components/ButtonCounter';
import Collapse from './components/Collapse';
import TabsContainer from './containers/TabsContainer';
import { connect } from 'react-redux';
import './app.less';

const App = ({ login, dispatch, history, location }) => (
  <div>
    <div onClick={() => {
      console.log('history', history);
      console.log('location', location);
      
      dispatch({
        type: 'APP_LOGIN',
        payload: {
          login: true
        }
      })
    }}>
      我{login ? '已经' : '还没有'}登录
    </div>
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
    <hr />
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

const mapStateToProps = ({ app }) => ({
  login: app.login
});

export default connect(mapStateToProps)(App);
