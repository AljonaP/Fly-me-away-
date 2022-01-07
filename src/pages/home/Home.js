import React from 'react';
// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import axios from "axios";
import TopMenu from "../../components/TopMenu/TopMenu";
import Footer from "../../components/Footer/Footer";
import BackgroundImg from '../../assets/TropicsSeaPalm.jpg';

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
            <h1>DIT IS EEN HOME PAGE</h1>
            <img src={BackgroundImg}/>


            {/*<Footer/>*/}
        </>

);

}

export default Home;