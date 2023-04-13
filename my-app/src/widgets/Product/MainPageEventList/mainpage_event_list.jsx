import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import luffy from './assets/luffy.jpg'
import arrow from './assets/right-arrow.png'
import EventItem from '../EventItem/event_item';

import "./style.css"

export const MainPageEventList = ({ eventItems, categoruID }) => {
    let navigate = useNavigate();

    return (
        <div className='box_one_category_product'>
            {eventItems.slice(0, 5).map(item =>
                <EventItem areYouAuthor={false} date={item.date} name={item.name} location={item.location} city={item.city} price={item.price} />
            )}
            {eventItems.length > 4 ? <Link to={`/event/${categoruID}`}>
                <div className='all_product_one_catgory_button'>
                    Переглянути усі
                    <img className='arrow_all' src={arrow} alt="aboba" />
                </div>
            </Link> : ''}
        </div>
    )
}