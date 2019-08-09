
import * as React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PersonalManage from './containers/PersonalManage';
import Detail from './containers/Detail';
import About from './containers/About';

const Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/home" >首页</NavLink>
        <NavLink to="/personal" >个人中心</NavLink>
        <NavLink to="/detail" >详情</NavLink>
        <NavLink to="/about" >关于</NavLink>
      </div>
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
