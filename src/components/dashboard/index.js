import React, { Component } from 'react';
import MiniDrawer from './sideNav';
import 'c3/c3.css';
import { Animation } from 'mdbreact';

export default class Dashboard extends Component {
  render() {
    return (
      <Animation type="fadeIn">
        <MiniDrawer />
      </Animation>
    );
  }
}
