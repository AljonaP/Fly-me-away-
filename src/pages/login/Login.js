import React from 'react';
import {useHistory} from "react-router-dom";

function Login(props) {
    let history = useHistory();
    return (
        <div>
            <button
                type="button" onClick={()=> history.goBack()}>
                Ga terug naar de vorige pagina
            </button>
            <h1>DIT IS EEN LOGIN PAGINA</h1></div>
    );
}

export default Login;