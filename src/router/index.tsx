import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import RouteConfig from 'src/config/route.config';
import { Spin } from 'antd';

type RouteViewNameTypes = { name: keyof typeof RouteConfig };
export const SwitchView: React.FC<RouteViewNameTypes> = ({ name }) => {
  return (
    <Suspense
      fallback={
        <div className="ui-w-100 ui-h-100 flex-col just-center align-center">
          <Spin />
        </div>
      }
    >
      <Switch>
        {RouteConfig[name as 'Root'].map((opts) => {
          return <Route key={opts.path + opts.component.toString()} path={opts.path} exact={!!opts.exact} component={opts.component} />;
        })}
      </Switch>
    </Suspense>
  );
};

export default (
  <RecoilRoot>
    <Router>
      <SwitchView name="Root" />
    </Router>
  </RecoilRoot>
);
