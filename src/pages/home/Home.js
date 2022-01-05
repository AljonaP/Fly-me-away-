import React from 'react';
// import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
// import axios from "axios";
import TopMenu from "../../components/TopMenu/TopMenu";


function Home() {
    const [contactMessage, setContactMessage] = React.useState('');

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const result = await axios.get('https://partners.api.skyscanner.net/apiservices/')
    //             console.log(result.data)
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    //
    //     getData();
    // }, [])

    return (
        <>
            <div><h1>DIT IS EEN HOME PAGE</h1></div>



            <footer>
                <div>
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
                        naar
                        jouw favoriete bestemming.

                        Op alle onze deals zijn de Algemene Voorwaarden en Privacy Beleid van toepassing.
                        De getoonde prijzen zijn inclusief BTW, maar kunnen varieren bij de vliegticketaanbieder.
                    </div>


                    <div>2. Hier is het text over het bedrijf en voorwaarden
                        {/*<Link to...>Hier is link naar Algemene voorwaarden</Link>*/}
                        {/*<Link to...>Hier is link naar Privacy beleid</Link>*/}
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
                    <button type="submit">
                        Verzend
                    </button>
                </form>
                </div>
            </footer>
        </>

);

}

export default Home;