import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../../context/ContextAuthorization';
import './TopMenu.css';
import language from '../../assets/flagNL.png';
import logo from '../../assets/logoFlyMeAway.png';

function TopMenu() {
    const {logout, authorized} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav>
            <span className="language-currency">
                <img src={language} alt="taal" id="language-img"/>
                <h2 className="currency">EUR</h2>
            </span>

            <Link to="/">
                    <span className="logo-container">
                    <img src={logo} alt="logo-FlyMeAway"/>
                    </span>
            </Link>

                {authorized ?
                    <button type="button"
                            className="button-topmenu"
                            onClick={logout}
                    >logout
                    </button> :
                    <div>
                        <button
                            type="button"
                            className="button-topmenu"
                            onClick={() => history.push('/account-aanmaken')}
                        >
                            Registreren
                        </button>
                        <button
                            type="button"
                            className="button-topmenu"
                            onClick={() => history.push('/inloggen')}
                        >
                            Aanmelden
                        </button>

                    </div>
                }
        </nav>
);
}

export default TopMenu;