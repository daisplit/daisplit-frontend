import React, { Component } from 'react';
import Dashboard from './dashboard';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
