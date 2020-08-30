import React ,{useState} from "react";
import {Redirect} from "react-router-dom";
//props.links - array of objects {path:string, label:string}
export default function Toolbar(props) {
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





