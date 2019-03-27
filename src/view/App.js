import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import '../App.css';
import { Header } from "./common/Header";
import { Footer } from './common/Footer';
import { UsersPage } from './users/UsersPage';
import { UserPage } from './userDetails/UserPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/users/:id" component={UserPage} />
            <Route path="/" component={UsersPage} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
