import React ,{useState} from "react";
import {Redirect} from "react-router-dom";

function Toolbar(props) {
//props.links - array of objects {path:string, label:string}
        const [path, setPath] = useState('');
        function handleButton(newPath) {
            setPath(newPath);
        }
        const buttons =
            props.links.map(l =>
                <button key={l.label} onClick={() => handleButton(l.path)}>{l.label}</button>)
        return <React.Fragment>
            {buttons} <br/> <br/>
            {path ? <Redirect to={path}/> : null}
        </React.Fragment>
}

function StateBar(props) {
}

export {Toolbar}
export {StateBar}