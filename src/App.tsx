
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PersonalManage from './containers/PersonalManage';
import Detail from './containers/Detail';
import Layout from './containers/Layout';
import dynamic from './dynamic';

const Loading = () => {
  return <div>loading...</div>
}

const Routers = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact component={Home} ></Route>
        <Route path="/personal" exact component={PersonalManage} ></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Route
          path="/about"
          exact
          render={(props) => {
            const About = dynamic(() => import('./containers/About'), {
              loading: Loading
            })
            return <About xxx="ronffy" />
          }}
        >
        </Route>
        {/* <Route path="/about" exact component={ImportBundle} ></Route> */}
      </Switch>
    </Layout>
  )
}

export default Routers
