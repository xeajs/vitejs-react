import React, { lazy } from 'react';

import PageRoot from 'src/pages/index';
import { Redirect } from 'react-router-dom';

export default {
  Root: [
    {
      path: '/',
      exact: true,
      component: PageRoot
    },
    {
      path: '/home',
      component: lazy(() => import('src/pages/Home'))
    }
  ],
  Home: [
    {
      path: '/home/',
      exact: true,
      component: () => <Redirect to="/home/menu" />
    },
    {
      path: '/home/menu',
      component: lazy(() => import('src/pages/Home/Menu'))
    },
    {
      path: '/home/nav',
      component: lazy(() => import('src/pages/Home/Nav'))
    },
    {
      path: '/home/opts',
      component: lazy(() => import('src/pages/Home/Opts'))
    }
  ]
};
