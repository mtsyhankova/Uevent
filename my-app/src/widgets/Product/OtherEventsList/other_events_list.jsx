import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../Product/Pagination/pagination';
import userAvatar from '../../../asssets/User/luffy.jpg'
import EventItem from '../EventItem/event_item';

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
                    <EventItem areYouAuthor={false} date={item.date} name={item.name} location={item.location} city={item.city} price={item.price} />
                )}
            </div>
            <Pagination quantity={organizersEvents.length} numberForPage={3} current={eventsPage} change={setEventsPage} />
        </div>
    )
}
export default OtherEventsList;