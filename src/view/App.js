import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import '../App.css';
import { Header } from "./common/Header";
import { Footer } from './common/Footer';
import { UsersPage } from './users/UsersPage';
import { UserPage } from './userDetails/UserPage';
import { CreateUser } from './users/CreateUser';
import { EditUser } from './users/EditUser';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/users/create" component={CreateUser} />
            <Route path="/users/:id/edit" component={EditUser} />
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
