import React from 'react';
import { Link } from 'react-router-dom';
import luffy from './assets/luffy.jpg'
import arrow from './assets/right-arrow.png'

import "./style.css"

export const EventItem = ({ eventItems }) => {
    return (
        <div className='box_one_category_product'>
            {eventItems.slice(0, 5).map(item =>
                <div>
                    <div className='event-hover-vision'>
                        <div className='eventitem'>
                            <img className='eventimg' src={luffy} alt="aboba" />
                            <p className='event-data-text'>{item.date}</p>
                            <p className='event-name-text'>{item.name}</p>
                            <p className='event-location-text'>{item.location}</p>
                            <p className='event-price-text'>{item.price}</p>
                        </div>

                    </div>
                </div>
            )}
            {eventItems.length > 4 ? <Link to="/uhuhu">
                <div className='all_product_one_catgory_button'>
                    Переглянути усі
                    <img className='arrow_all' src={arrow} />
                </div>
            </Link> : ''}

        </div>
    )
}