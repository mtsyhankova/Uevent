import React, { useState } from 'react';
import { useParams/*, useNavigate*/ } from 'react-router-dom';
import { NavBar } from '../../widgets/User/NavBar'
import LocationMap from '../../widgets/Product/LocationMap/location_map';
import Comments from '../../widgets/User/Comments/comments';
import SubsList from '../../widgets/User/SubsList/subs_list';
import OtherEventsList from '../../widgets/Product/OtherEventsList/other_events_list';
import luffy from './assets/luffy.jpg';

import "./style.css"

const EventOpened = () => {
    const { date, name, location, city, price } = useParams();
    const [buttonText, setButtonText] = useState([`${price} грн`]);
    // const [eventsPage, setEventsPage] = useState([0]);
    // let navigate = useNavigate();

    function onhover() {
        setButtonText("Підписатися");
    }

    function offhover() {
        setButtonText(`${price} грн`);
    }

    const checkAuth = async event => {
        event.preventDefault();
        if (!localStorage.getItem('token')) {
            navigate('/auth');
        } else {
            navigate(`/`)
        }

    }

    return (
        <div>
            <NavBar />

            <div className='event_opened_content'>
                <div className='event_opened_name_box'>
                    <p className='event_opened_name'>{name}</p>
                </div>

                <div className='event_opened_flex_row'>
                    <div className='event_opened_flex_col'>
                        <img className='event_opened_img' src={luffy} alt="aboba" />
                        <LocationMap />
                    </div>

                    <div className='event_opened_flex_col'>
                        <div className='event_opened_flex_row'>
                            <p className='event_opened_date'>{date}</p>
                            <p className='event_opened_date'>{location}, {city}</p>
                        </div>

                        <span className='event_opened_button' onClick={checkAuth} onMouseEnter={onhover} onMouseLeave={offhover}>{buttonText}</span>

                        <p className='event_opened_description'>Опис події</p>
                        <p className='event_opened_date'> бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла</p>

                    </div>
                </div>
            </div>

            <SubsList />
            <OtherEventsList UpperText={"Інші події цього організатора"} />
            <Comments />
        </div>
    )
}
export default EventOpened;