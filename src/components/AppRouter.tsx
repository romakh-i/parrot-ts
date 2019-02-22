import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as React from 'react';

import MainPage from './MainPage';
import LogIn from './LogIn';
import SignUp from './SignUp';


import { reducer } from '../store/index';


const store = createStore(reducer);

class AppRouter extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/signup" render={(props) => (
              !store.getState().user.isLoggedIn ? <SignUp {...props} /> : <Redirect to="/" />
            )} />
            <Route path="/login" render={(props) => (
              !store.getState().user.isLoggedIn ? <LogIn {...props} /> : <Redirect to="/" />
            )} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default AppRouter;