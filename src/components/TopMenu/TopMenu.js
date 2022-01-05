import React, {useContext} from 'react';

// import logo from '../src/assets/logoFrlyMeAway.png';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../../context/ContextAuthorization';

// import language from '../assets/flagNL.png';

function TopMenu() {
    const {logout, authorized} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav>
            <div className="top-menu">
                {/*<img src={language} alt="taal"/>*/}

                <h2>EUR</h2>

                <Link to="/">
                    <span className="logo-container">A
                    {/*<img src={logo} alt="logo-FlyMeAway"/>*/}
                    {/*<p>Naar Homepagina</p>*/}
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
            </div>


        </nav>

);
}

export default TopMenu;