import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import './Home.css';
import Button from "../../components/Button/Button";
import InputFieldLabelName from "../../components/InputFieldLabelName/InputFieldLabelName";
import InputFieldLabelValue from "../../components/InputFieldLabelValue/InputFieldLabelValue";
import PassengerType from "../../components/PassengerType/PassengerType";
import axios from "axios";

function Home() {
    const [loading, setLoading] = useState(true);
    const [destinationFrom, setDestinationFrom] = useState('');
    const [destinationTo, setDestinationTo] = useState('');
    const [ticketOnewayRetour, toggleTicketOnewayRetour] = useState('Retour');
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [passengerChild, setPassengerChild] = useState(0);
    const [passengerBaby, setPassengerBaby] = useState(0);
    const [ticketClass, toggleTicketClass] = useState('Economy');



    useEffect(() => {
        async function getData() {
            setLoading(true);
            const token = localStorage.getItem('token')
            try {
                const result = await axios.post('https://api.airfranceklm.com/opendata/offers/v1/search-context', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Accept-language': 'en-US',
                        'Afkl-travel-country': 'NL',
                        'Afkl-travel-host': 'KL',
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
    // if (loading) return `loading...`


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

    return (
        <div className="Homepage-body">
            <form onSubmit={onFormSubmit} className="form-vluchten">
                <h1>Vluchten</h1>
                <section className="destination">
                    <InputFieldLabelName
                        name="Van"
                        id="from"
                        type="text"
                        value={destinationFrom}
                        onChange={(e) => setDestinationFrom(e.target.value)}
                    />
                    <InputFieldLabelName
                        name="Naar"
                        id="to"
                        type="text"
                        value={destinationTo}
                        onChange={(e) => setDestinationTo(e.target.value)}
                    />
                </section>
                <section className="oneway-return">
                    <InputFieldLabelValue
                        name="Enkel of Return"
                        value="Enkel"
                        type="radio"
                        id="Oneway"
                        checked={ticketOnewayRetour === 'Enkel'}
                        onChange={(e) => toggleTicketOnewayRetour(e.target.value)}
                    />
                    <InputFieldLabelValue
                        // name="Retour"
                        name="Enkel of Retour"
                        value="Retour"
                        type="radio"
                        id="Return"
                        checked={ticketOnewayRetour === 'Retour'}
                        onChange={(e) => toggleTicketOnewayRetour(e.target.value)}
                    />
                </section>
                <section>
                    <InputFieldLabelName
                        name="Heen"
                        type="date"
                        id="outbound-date-to"
                        min={today}
                    />
                    <InputFieldLabelName
                        name="Terug"
                        type="date"
                        min={today}
                    />
                </section>
                <section>
                    <h4>Passagiers</h4>
                    <PassengerType name="Volwassen" stateKeyName={passengerAdult} stateSetterName={setPassengerAdult} disabled={passengerAdult === 0}/>
                    <PassengerType name="Kinderen" description="_van 2 tot 17 jaar" stateKeyName={passengerChild}
                                   stateSetterName={setPassengerChild} disabled={passengerChild === 0}/>
                    <PassengerType name="Baby's" description="_jonger dan 2 jaar" stateKeyName={passengerBaby}
                                   stateSetterName={setPassengerBaby} disabled={passengerBaby === 0}/>
                </section>
                <section>
                    <h4>Klasse</h4>
                    <select
                        name="class" id="class" value={ticketClass} onChange={(e) => toggleTicketClass(e.target.value)}>
                        <option>ALL</option>
                        <option>ECONOMY</option>
                        <option>PREMIUM</option>
                        <option>BUSINESS</option>
                        <option>FIRST</option>
                    </select>
                </section>

                <Button name="Zoeken" type="submit"/>

            </form>

        </div>

    );

}

export default Home;