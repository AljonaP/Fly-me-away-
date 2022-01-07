import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../../context/ContextAuthorization';
import './TopMenu.css';
import language from '../../assets/flagNL.png';
import logo from '../../assets/logoFlyMeAway.png';
// import logo from '../src/assets/logoFlyMeAway.png';

function TopMenu() {
    const {logout, authorized} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav>
            <span className="language-currency">
                <img src={language} alt="taal" id="language-img"/>
                <h2>EUR</h2>
            </span>

            <Link to="/">
                    <span className="logo-container">
                    <img src={logo} alt="logo-FlyMeAway"/>
                    {/*<p className="hhh">FlyMeAway</p>*/}
                    </span>
            </Link>

                {authorized ?
                    <button type="button"
                            onClick={logout}
                    >logout
                    </button> :
                    <div>
                        <button
                            type="button"
                            onClick={() => history.push('/account-aanmaken')}
                        >
                            Registreren
                        </button>
                        <button
                            type="button"
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