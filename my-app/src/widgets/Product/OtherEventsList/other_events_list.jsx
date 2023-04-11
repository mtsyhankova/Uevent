import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../Product/Pagination/pagination';
import userAvatar from '../../../asssets/User/luffy.jpg'

const OtherEventsList = ({ UpperText }) => {
    const [eventsPage, setEventsPage] = useState([0]);
    const organizersEvents = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" }]
    let navigate = useNavigate();

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>{UpperText}</p>
            <div className='event_opened_flex_row'>
                {organizersEvents.slice(eventsPage * 3, eventsPage * 3 + 3).map(item =>
                    <div>
                        <div className='card-white'>
                            <img className='eventimg' src={userAvatar} alt="aboba" />
                            <p className='event-date-text'>{item.date}</p>
                            <p className='event-name-text'>{item.name}</p>
                            <p className='event-location-text'>{item.location}</p>
                            <p className='event-city-text'>{item.city}</p>
                            <p className='event-price-text'>{item.price}</p>
                            <div className='card-pink'>
                                <p className='event-reverse-date'>{item.date}</p>
                                <p className='event-reverse-location'>{item.location}</p>
                                <p className='event-reverse-name'>{item.name}</p>
                                <span className='event-button' onClick={() => { navigate(`/event/open/${item.date}/${item.name}/${item.location}/${item.city}/${item.price}/`) }}>Придбати</span>
                            </div>
                        </div>
                    </div>)}
            </div>
            <Pagination quantity={organizersEvents.length} numberForPage={3} current={eventsPage} change={setEventsPage} />
        </div>
    )
}
export default OtherEventsList;