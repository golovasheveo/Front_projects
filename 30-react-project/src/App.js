import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";

function App(props) {
    return (
        <Clock name={'Moshe'} interval ={5000}/>
    );
}


// function App(props) {
//   return (
//     <div className="App">
//         <img src={'logo192.png'}/>
//         <h1>Welcome {props.name}</h1>
//       <h2>Current data time</h2>
//         <h3>{props.date.toLocaleString()}</h3>
//     </div>
//   );
// }

export default App;
