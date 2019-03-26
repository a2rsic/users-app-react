import React, { Component } from 'react';

import '../App.css';
import { Header } from "./common/Header";
import { Footer } from './common/Footer';
import { UsersPage } from './feed/UsersPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="content">
          <UsersPage />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
