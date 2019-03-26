import React, { Component } from 'react';

import '../App.css';
import { Header } from "./common/Header";
import { Footer } from './common/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="content">
          text
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
