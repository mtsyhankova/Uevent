import React from 'react';
import { useNavigate } from 'react-router-dom';
import luffy from '../../../asssets/User/luffy.jpg'

const EventItem = ({ areYouAuthor, date, name, location, city, price }) => {
    let navigate = useNavigate();

    return (
        <div className='item_card'>
            <div className='card-white'>
                <img className='eventimg' src={luffy} alt="aboba" />
                <p className='event-date-text'>{date}</p>
                <p className='event-name-text'>{name}</p>
                <p className='event-location-text'>{location}</p>
                <p className='event-city-text'>{city}</p>
                <p className='event-price-text'>{price}</p>
                <div className='card-pink'>
                    <p className='event-reverse-date'>{date}</p>
                    <p className='event-reverse-location'>{location}</p>
                    <p className='event-reverse-name'>{name}</p>
                    {areYouAuthor ? <div className='event_flex_col'>
                        <span className='event-button btn2' onClick={() => { navigate(`/event/edit/${date}/${name}/${location}/${city}/${price}/`) }}>Редагувати</span>
                        <span className='event-button btn2' onClick={() => { navigate(`/event/delete/${date}/${name}/${location}/${city}/${price}/`) }}>Видалити</span>
                    </div>
                        : <span className='event-button' onClick={() => { navigate(`/event/open/${date}/${name}/${location}/${city}/${price}/`) }}>Придбати</span>
                    }
                </div>
            </div>
        </div>
    )
}
export default EventItem;