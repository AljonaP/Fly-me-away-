import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import InputField from "../../components/InputField/InputField";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clicked, toggleClicked] = useState(false);
    let history = useHistory();

    function handleClick(e) {
        e.preventDefault()
        toggleClicked(!clicked)
        history.push("/")
        console.log(`
        Email: ${email},
        Password: ${password},
        `)
    }
    return (
        <>
            <form onSubmit={handleClick}>
                <h1>Aanmelden</h1>
                <InputField
                    type="text"
                    id="email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <InputField
                    type="text"
                    id="password"
                    name="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button
                    type="submit"
                    className="send-button"
                >Submit
                </button>
            </form>
        </>
    );
}

export default Login;