import React, {useEffect, useState} from 'react';
// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import axios from "axios";
import './Home.css';
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import PassengerType from "../../components/PassengerType/PassengerType";
import axios from "axios";

function Home() {
    const [destinationFrom, setDestinationFrom] = useState('');
    const [destinationTo, setDestinationTo] = useState('');
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [passengerChild, setPassengerChild] = useState(0);
    const [passengerBaby, setPassengerBaby] = useState(0);
    const [ticketClass, toggleTicketClass] = useState('Economy');

    useEffect(() => {
        async function getData() {
            // const token = localStorage.getItem('token')
            try {
                const result = await axios.get('https://api.klm.com/travel/offers/v1/reference-data?bookingFlow=', {
                    headers: {
                        // "Authorization": `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'accept': 'application/hal+json',
                        'accept-language': 'en-US',
                        'afkl-travel-country': 'NL',
                        'afkl-travel-host': 'KL',
                        'api-key': 'gg6rdsw4d82y9dhppr72w8we',
                    }
                })
                console.log(result.data)
            } catch (e) {
                console.error(e)
            }
        }

        getData();
    }, []);


    // -H 'accept: application/hal+json' \
    //             -H 'accept-language: en-US' \
    //             -H 'afkl-travel-country: NL' \
    //             -H 'afkl-travel-host: KL' \
    //             -H 'api-key: testapikey'



    function onFormSubmit(event) {
        event.preventDefault();
        console.log('Submitted!');
    }

    let today = new Date().toISOString().split('T')[0];
    // const today = new Date();
    return (
        <div className="Homepage-body">
            <form onSubmit={onFormSubmit} className="form-vluchten">
                <h1>Vluchten</h1>
                <section className="destination">
                    <InputField
                        name="Van"
                        id="from"
                        type="text"
                        value={destinationFrom}
                        onChange={(e) => setDestinationFrom(e.target.value)}
                    />
                    <InputField
                        name="Naar"
                        id="to"
                        type="text"
                        value={destinationTo}
                        onChange={(e) => setDestinationTo(e.target.value)}
                    />
                </section>
                <section className="oneway-return">
                    <InputField
                        name="Enkel"
                        type="radio"/>
                    <InputField
                        name="Retour"
                        type="radio"/>
                </section>
                <section>
                    <InputField
                        name="Heen"
                        type="date"
                        id="outbound-date-to"
                        min={today}
                    />
                    <InputField
                        name="Terug"
                        type="date"
                    />
                </section>
                <section>
                    <h4>Passagiers</h4>
                    <PassengerType name="Volwassen" stateKeyName={passengerAdult} stateSetterName={setPassengerAdult}/>
                    <PassengerType name="Kinderen" description="van 2 tot 17 jaar" stateKeyName={passengerChild}
                                   stateSetterName={setPassengerChild}/>
                    <PassengerType name="Baby's" description="jonger dan 2 jaar" stateKeyName={passengerBaby}
                                   stateSetterName={setPassengerBaby}/>
                </section>
                <section>
                    <h4>Klasse</h4>
                    <select
                        name="class" id="class" value={ticketClass} onChange={(e) => toggleTicketClass(e.target.value)}>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business class</option>
                        <option>First class</option>
                    </select>
                </section>

                <Button name="Zoeken" type="submit"/>

            </form>

        </div>

    );

}

export default Home;