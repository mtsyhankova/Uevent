import React from 'react';
import { Link } from 'react-router-dom';
import luffy from './assets/luffy.jpg'
import arrow from './assets/right-arrow.png'

import "./style.css"

export const EventItem = ({ eventItems, categoruID }) => {
    return (
        <div className='box_one_category_product'>
            {eventItems.slice(0, 5).map(item =>
                <div>
                    <div className='card-white'>
                        <img className='eventimg' src={luffy} alt="aboba" />
                        <p className='event-date-text'>{item.date}</p>
                        <p className='event-name-text'>{item.name}</p>
                        <p className='event-location-text'>{item.location}</p>
                        <p className='event-price-text'>{item.price}</p>
                        <div className='card-pink'>
                            <p className='event-reverse-date'>{item.date}</p>
                            <p className='event-reverse-location'>{item.location}</p>
                            <p className='event-reverse-name'>{item.name}</p>
                            <span className='event-button'>Придбати</span>
                        </div>
                    </div>
                </div>
            )}
            {eventItems.length > 4 ? <Link to={`/products/${categoruID}`}>
                <div className='all_product_one_catgory_button'>
                    Переглянути усі
                    <img className='arrow_all' src={arrow} alt="aboba" />
                </div>
            </Link> : ''}
        </div>
    )
}