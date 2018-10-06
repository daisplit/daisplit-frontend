import React, { Component } from "react";
import MiniDrawer from './presentation/sideNav';
import 'c3/c3.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <MiniDrawer />
            </div>
        );
    }
}