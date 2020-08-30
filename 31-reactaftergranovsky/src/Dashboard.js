import React, {Component} from "react";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.color
        }
    }
    changeBackground(color) {
        this.setState(() => {return {background: color}} )
    }

    componentDidMount() {
        console.log("component Mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component Updated")

    }

    componentWillUnmount() {
        console.log("component unmount")
    }

    render() {
        return <React.Fragment>
            <div style={{background: this.state.background,  color: 'white'}}>
                {console.log("Run render DASHBOARD")}
                DASHBOARD
                <br/><br/>
                <button onClick={() => this.changeBackground("purple")}>BUTTON Purple</button>
                <button onClick={() => this.changeBackground("red")}>BUTTON Red</button>
                <button onClick={() => this.changeBackground(this.props.color)}>BUTTON Default</button>
            </div>
        </React.Fragment>
    }
}

