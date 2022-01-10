import React, {useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import './Create-account.css';


function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedTerms, toggleCheckedTerms] = useState("");
    const [checkedNewsletter, toggleCheckedNewsletter] = useState("");
    const [clicked, toggleClicked] = useState(false);
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault()
        toggleClicked(!clicked)
        history.push("/inloggen")
        console.log(`
        Voornaam: ${firstName},
        Achternaam: ${surname},
        Email: ${email},
        Password: ${password},
        Checkbox1: ${checkedTerms},
        Checkbox2: ${checkedNewsletter}
        `)
    }

    return (
        <>
            <form onSubmit={handleClick} className="form-create-account">
                <h1>Account aanmaken</h1>

                <InputField
                    type="text"
                    id="firstname"
                    name="Voornaam"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>

                <InputField
                    type="text"
                    id="surname"
                    name="Achternaam"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}/>

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




                <InputField
                        type="radio"
                        id="checkbox-terms"
                        name2="Ik accepteer het Privacy beleid en de Algemene Voorwaarden"
                        value="Terms"
                        checked={checkedTerms === "Terms"}
                        onChange={(e) => toggleCheckedTerms(e.target.value)}/>

                <InputField
                        type="radio"
                        id="checkbox-newsletter"
                        name2="Ik meld me aan voor de nieuwsbrief"
                        value="News"
                        checked={checkedNewsletter === "News"}
                        onChange={(e) => toggleCheckedNewsletter(e.target.value)}/>

                <button
                    type="submit"
                    className="send-button"
                >Submit
                </button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/inloggen">hier</Link> aanmelden.</p>

        </>
    );
}

export default CreateAccount;

