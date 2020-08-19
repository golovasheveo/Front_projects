import React from 'react';
import logo from './logo.svg';
import './App.css';

function ChildApp(props) {
    return (
        <div className="ChildApp">
            <span style={props.style}>Hello: {props.herNumber}</span>
        </div>
    )
}

export {ChildApp}