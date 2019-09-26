
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PersonalManage from './containers/PersonalManage';
import Detail from './containers/Detail';
import Layout from './containers/Layout';
import dynamic from './dynamic';
import { ProviderContext } from './context';
import Loading from './components/Loading/Loading';

const Routers = () => {
  return (
    <ProviderContext value={{ color: 'red' }}>
      <Layout>
        <Switch>
          <Route path="/home" exact component={Home} ></Route>
          <Route path="/personal" exact component={PersonalManage} ></Route>
          <Route
            path="/detail"
            exact
            component={Detail}
          >
          </Route>
          <Route
            path="/about"
            exact
            render={() => {
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
    </ProviderContext>
  )
}

export default Routers
