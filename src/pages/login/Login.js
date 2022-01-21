import React, {useState, useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/ContextAuthorization";
import axios from "axios";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import './Login.css';


function Login(){
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [clicked, toggleClicked] = useState(false);
    let history = useHistory();

    async function handleClick(e) {
        e.preventDefault();
        // toggleClicked(!clicked)
        // history.push("/")
        console.log(`
        Username: ${username},
        Password: ${password},
        `)
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(result.data) //komt de accesToken uit
            login(result.data.accessToken); //geven we de accesToken aan de login
            console.log(result.data.accessToken);
            history.push("/");
        } catch (e) {
            console.error(e);
            console.log(e.response); //geeft in Backend (in Console) welke fout er precies is
        }

    }

    return (
        <>
            <form onSubmit={handleClick} className="form-create-account-login">
                <h1>Aanmelden</h1>
                <InputField
                    type="text"
                    id="username"
                    name="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>

                <InputField
                    type="password"
                    id="password"
                    name="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <Button
                    name="Submit"
                    type="submit"
                    className="send-button"
                />
            </form>
            <p>Heb je nog geen account? <Link to="/account-aanmaken">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default Login;