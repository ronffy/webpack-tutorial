
import * as React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PersonalManage from './containers/PersonalManage';
import Detail from './containers/Detail';
import About from './containers/About';
import Menu from './components/Menu';

const Routers = () => {
  return (
    <BrowserRouter>
      <Menu style={{ marginBottom: '15px' }} />
      <Switch>
        <Route path="/home" exact component={Home} ></Route>
        <Route path="/personal" exact component={PersonalManage} ></Route>
        <Route path="/detail" exact component={Detail} ></Route>
        <Route path="/about" exact component={About} ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routers
