import React, { Component } from 'react';
import Landing from './landingPage/container/landing';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Landing} />
      </BrowserRouter>
    );
  }
}

export default App;
