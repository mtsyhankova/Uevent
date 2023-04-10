// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { NavBar } from '../../widgets/User/NavBar'
// // import { Footer } from '../../widgets/User/Footer';
// import Pagination from '../../widgets/Product/Pagination/pagination';
// import luffy from './assets/luffy.jpg';
// import { GoogleMap, useLoadScript, Marker } from "react-google-maps";
// import GoogleMapReact from 'google-map-react';

// import "./style.css"

// const EventOpened = () => {
//     const { date, name, location, city, price } = useParams();
//     const [buttonText, setButtonText] = useState([`${price} грн`]);
//     const [subsPage, setSubsPage] = useState([0]);
//     const [eventsPage, setEventsPage] = useState([0]);
//     let navigate = useNavigate();

//     const subsNames = [{ name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }]
//     const organizersEvents = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
//     { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
//     { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
//     { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
//     { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
//     { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
//     { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
//     { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
//     { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" }]
//     const comments = [{ name: 'Перший', content: 'бла бла бла' }, { name: 'Другий', content: 'бла бла бла' }, { name: 'Третій', content: 'бла бла бла' }]

//     function onhover() {
//         setButtonText("Підписатися");
//     }

//     function offhover() {
//         setButtonText(`${price} грн`);
//     }

//     return (
//         <div>
//             <NavBar />

//             <div className='event_opened_content'>
//                 <div className='event_opened_name_box'>
//                     <p className='event_opened_name'>{name}</p>
//                 </div>

//                 <div className='event_opened_flex_row'>
//                     <img className='event_opened_img' src={luffy} alt="aboba" />

//                     <div className='event_opened_flex_col'>
//                         <div className='event_opened_flex_row'>
//                             <p className='event_opened_date'>{date}</p>
//                             <p className='event_opened_date'>{location}, {city}</p>
//                         </div>

//                         <span className='event_opened_button' onMouseEnter={onhover} onMouseLeave={offhover}>{buttonText}</span>

//                         <p className='event_opened_description'>Опис події</p>
//                         <p className='event_opened_date'> бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='event_opened_subslist'>
//                 <p className='event_opened_description'>Список підписників</p>
//                 <div className='event_opened_flex_row'>
//                     {subsNames.slice(subsPage * 5, subsPage * 5 + 5).map(item =>
//                         <div className='event_opened_flex_row'>
//                             <div className='event_opened_circle'></div>
//                             <p className='event_opened_subname'>{item.name}</p>
//                         </div>
//                     )}
//                 </div>
//                 <Pagination quantity={subsNames.length} numberForPage={5} current={subsPage} change={setSubsPage} />
//             </div>

//             <div className='event_opened_subslist'>
//                 <p className='event_opened_description'>Інші події цього організатора</p>
//                 <div className='event_opened_flex_row'>
//                     {organizersEvents.slice(eventsPage * 3, eventsPage * 3 + 3).map(item =>
//                         <div>
//                             <div className='card-white'>
//                                 <img className='eventimg' src={luffy} alt="aboba" />
//                                 <p className='event-date-text'>{item.date}</p>
//                                 <p className='event-name-text'>{item.name}</p>
//                                 <p className='event-location-text'>{item.location}</p>
//                                 <p className='event-city-text'>{item.city}</p>
//                                 <p className='event-price-text'>{item.price}</p>
//                                 <div className='card-pink'>
//                                     <p className='event-reverse-date'>{item.date}</p>
//                                     <p className='event-reverse-location'>{item.location}</p>
//                                     <p className='event-reverse-name'>{item.name}</p>
//                                     <span className='event-button' onClick={() => { navigate(`/event/open/${item.date}/${item.name}/${item.location}/${item.city}/${item.price}/`) }}>Придбати</span>
//                                 </div>
//                             </div>
//                         </div>)}
//                 </div>
//                 <Pagination quantity={organizersEvents.length} numberForPage={3} current={eventsPage} change={setEventsPage} />
//             </div>

//             <div className='event_opened_subslist'>
//                 <p className='event_opened_description'>Коментарі</p>
//                 {comments.map(item =>
//                     <div className='event_opened_flex_row'>
//                         <img src={luffy} alt="aboba" className='event_opened_avatar' />

//                         <div className='event_opened_flex_col'>
//                             <p className='event_opened_comment_name'>{item.name}</p>
//                             <p className='event_opened_comment_content'>{item.content}</p>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Не знаю как эту хрень впиндюрить */}
//             {/* <div className='footer_box_eventpage'>
//                 <Footer />
//             </div> */}
//         </div>
//     )
// }
// export default EventOpened;