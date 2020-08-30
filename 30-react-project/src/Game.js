import React, {Component} from 'react';
import './App.css';
import TransformNumbers from "./service/TransformNumbers";
import {INTERVAL, N_COLUMNS, N_ROWS} from "./config/config";
import Matrix from "./components/Matrix";
import {getRandomMatrix} from "./utils/random";

// let ar = new Array([0,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]);

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: getRandomMatrix(N_COLUMNS, N_ROWS, 0, 1)
        }
        this.transform = new TransformNumbers();
    }

    tick() {
        this.setState({
            numbers: this.transform.getNumbers(this.state.numbers)
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick.bind(this), INTERVAL)
    }

    render() {
        return <Matrix numbers={this.state.numbers}/>
    }
}
