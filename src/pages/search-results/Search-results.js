// import React from 'react';
//
//
// // https://docs.airfranceklm.com/docs/read/opendata/offers/GET_availableoffers_v1
//
// // GET https://api.airfranceklm.com/opendata/offers/v1/available-offers{?d,departureDate,displayPriceContent}
//
// function SearchResults() {
//     return (
//         <div>
//             <h2>Resultaten verfijnen</h2>
//             <section>
//                 <h1>Tussenstops</h1>
//                 <select>
//                     <option>Direct</option>
//                     <option>1</option>
//                     <option>2</option>
//                 </select>
//             </section>
//             <section>
//                 <h1>Vertrektijden</h1>
//                 <input type="range">
//
//                 </input>
//             </section>
//             <section>
//                 <h1>Reisduur</h1>
//                 <Input name="Reisduur-heen" type="range" min="00:00" max="23:59"/>
//                 <Input name="Reisduur-terug" type="range" min="00:00" max="23:59"/>
//             </section>
//             <h2>Resultaten sorteren</h2>
//             <select>
//                 <option>Direct</option>
//                 <option>1</option>
//                 <option>2</option>
//             </select>
//             <div className="ticket-container">
//                 <div>
//                     <h2>Heen</h2>
//                     <h4>Airline name</h4>
//                     <img name="logo-airline"/>
//                     <time>Departure time</time>
//                     <p>Departure City</p>
//                     <p>Departure IATA code</p>
//                     <time dateTime="PT15H10M">Duration of Time</time>
//                     <h4>Tussenstops</h4>
//                     <time>Arrival time</time>
//                     <p>Destination City</p>
//                     <p>Destination IATA code</p>
//                 </div>
//                 <div>
//                     <div>
//                         <h2>Terug</h2>
//                         <h4>Airline name</h4>
//                         <img name="logo-airline"/>
//                         <time>Departure time</time>
//                         <p>Departure City</p>
//                         <p>Departure IATA code</p>
//                         <time dateTime="PT15H10M">Duration of Time</time>
//                         <h4>Tussenstops</h4>
//                         <time>Arrival time</time>
//                         <p>Destination City</p>
//                         <p>Destination IATA code</p>
//                     </div>
//                     <div className="price">Price €</div>
//                     <p>per reisiger</p>
//                     <button>Naar de site</button>
//                 </div>
//             </div>
//             );
//             }
//
//             export default SearchResults;// https://docs.airfranceklm.com/docs/read/opendata/offers/GET_flightDetails
