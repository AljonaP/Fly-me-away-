import React from 'react';
// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import axios from "axios";
import BackgroundImg from '../../assets/TropicsSeaPalm.jpg';

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

    return (
        <>
            <h1>DIT IS EEN HOME PAGE</h1>
            <img src={BackgroundImg} className="background-img"/>

        </>

);

}

export default Home;