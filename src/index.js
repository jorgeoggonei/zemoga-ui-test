import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { homePath, pastTrialsPath, howItWorksPath, loginPath } from './constants';

import './index.scss';

import Home from './pages/Home/Home';
import PastTrials from './pages/PastTrials/PastTrials';
import HowItWorks from './pages/HowItWorks/HowItWorks';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path={homePath} component={Home} exact />
      <Route path={pastTrialsPath} component={PastTrials} exact />
      <Route path={howItWorksPath} component={HowItWorks} exact />
      <Route path={loginPath} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
