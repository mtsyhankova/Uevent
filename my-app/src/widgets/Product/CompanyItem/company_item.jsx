import React from 'react';
import { useNavigate } from 'react-router-dom';
import luffy from '../../../asssets/User/luffy.jpg'

import "./style.css"

const CompanyItem = ({ name, location, email }) => {
    let navigate = useNavigate();

    return (
        <div className='item_card'>
            <div className='company-card-white'>
                <img className='companyimg' src={luffy} alt="aboba" />
                <p className='event-date-text'>{name}</p>
                <p className='event-name-text'>{location}</p>
                <p className='event-location-text'>{email}</p>
                {/* <p className='event-city-text'>{city}</p>
                <p className='event-price-text'>{price}</p> */}
                <div className='company-card-pink'>
                    <p className='event-reverse-date'>{location}</p>
                    <p className='event-reverse-location'>{email}</p>
                    <p className='company-reverse-name'>{name}</p>

                    <span className='event-button' onClick={() => { navigate(`/companies`) }}>Детальніше</span>
                </div>
            </div>
        </div>
    )
}
export default CompanyItem;