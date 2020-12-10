import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
