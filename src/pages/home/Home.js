import React, {useState} from 'react';
// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import axios from "axios";
import './Home.css';
import InputField from "../../components/InputField/InputField";
import PassengerType from "../../components/PassengerType/PassengerType";

function Home() {


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
    const [destinationFrom, setDestinationFrom] = useState('');
    const [destinationTo, setDestinationTo] = useState('');
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [passengerChild, setPassengerChild] = useState(0);
    const [passengerBaby, setPassengerBaby] = useState(0);
    const [ticketClass, toggleTicketClass] = useState('Economy');

    return (
        <div className="Homepage-body">
            <form className="form-vluchten">
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
                        type="date"/>
                    <InputField
                        name="Terug"
                        type="date"/>
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

                <button name="Zoeken" type="submit">Zoeken</button>

            </form>

        </div>

    );

}

export default Home;