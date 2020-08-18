import React from "react";
const words = ['XPEH','BAM','BCEM'];
let index = -1;
export default class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            word: words[0]
        }
    }

    tick() {
        index++;
        if (index === words.length) {
            index = 0;
        }
        this.setState({
            date: new Date(),
            word: words[index]
        })
    }
    componentDidMount() {
        this.intervalId = setInterval(this.tick.bind(this),
            this.props.interval || 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    render () {
        return <div className="App">
            <img src={'logo192.png'}/>
            <h1>Welcome {this.props.name}</h1>
            <h2>Current data time</h2>
            <h3>{this.state.date.toLocaleString()}</h3>
            <h4>{this.state.word}</h4>
        </div>
    }

}