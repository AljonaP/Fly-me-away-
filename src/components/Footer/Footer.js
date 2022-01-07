import React, {useState} from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    const [contactMessage, setContactMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function disableButton() {
        if (contactMessage.length < 20 && contactMessage.length > 300){
            setDisabled(true);
        }
    }
    function sendForm() {
        console.log(`Het bericht: "${contactMessage}" is succesvol verzonden.`);
        setSubmitted(true);
    }



    return (
        <div>
            <footer className="footer-container">

                    <address>
                        <div>
                            Ons adres:
                            FlyMeAway B.V.
                            Preludeweg 20
                            2457HX Alphen aan den Rijn
                        </div>

                        {/*<a href="tel:+31172222222">Office tel. +31 (0)172 - 22 22 22</a>*/}
                        <div>
                            Office tel. +31 (0)172 - 22 22 22
                            K.V.K : Gouda 54645648
                            BTW Nr. : NL 007934567B01
                        </div>
                    </address>
                    <div>
                        © FlyMeAway B.V. 2021
                        FlyWeAway is gemaakt voor de echte reizigers! Bekijk en vergelijk de beste deals al nú en vlieg
                        naar jouw favoriete bestemming.

                        Op alle onze deals zijn de
                        <Link to="/algemene-voorwaarden">
                        <span className="link-to-page">
                        <p>Algemene Voorwaarden</p>
                        </span>
                        </Link>
                        en
                        <Link to="/privacybeleid">
                        <span className="link-to-page">
                        <p>Privacy Beleid</p>
                        </span>
                        </Link>

                        van toepassing.
                        De getoonde prijzen zijn inclusief BTW, maar kunnen varieren bij de vliegticketaanbieder.
                    </div>
                    {/* Voor styling zie: https://github.com/hogeschoolnovi/frontend-react-fruit-perfection/blob/stap-6/src/App.css*/}
                    {/* Voor styling zie 3.4 React */}
                    <form className="contact-form">
                        <label htmlFor="message">
                            <input
                                type="text"
                                placeholder="Typ hier uw bericht, max 300 tekens"
                                name="message"
                                className={contactMessage.length > 300 ? 'input-message-error' : ''}
                                value={contactMessage}
                                onChange={(e) => setContactMessage(e.target.value)}
                            />
                            contactMessage.length > 300 &&
                            <p className="input-message-error">Dit bericht is te lang!</p>
                        </label>
                        <button type="submit" onClick={sendForm} disabled={disableButton()}>
                            Verzend
                        </button>
                    </form>

            </footer>
        </div>
    );
}

export default Footer;