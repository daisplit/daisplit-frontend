import C3Chart from 'react-c3js';
import React, { Component } from 'react';

const data = {
    columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
    ]
};

export default class MyChart extends Component {
    render() {
        return(
            <C3Chart data={data} />
        );
    }
}