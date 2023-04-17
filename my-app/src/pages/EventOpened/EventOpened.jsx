import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../../";

import { NavBar } from '../../widgets/User/NavBar'
import LocationMap from '../../widgets/Product/LocationMap/location_map';
import Comments from '../../widgets/User/Comments/comments';
import SubsList from '../../widgets/User/SubsList/subs_list';
import OtherEventsList from '../../widgets/Product/OtherEventsList/other_events_list';
import luffy from './assets/luffy.jpg';

import "./style.css"

const EventOpened = () => {
    const { store } = useContext(Context)

    const { date, name, location, city, price } = useParams();
    let { isSubscribed } = useParams();
    const [isSubscribedVar, setIsSubscribedVar] = useState(isSubscribed);
    const [buttonText, setButtonText] = useState();
    let navigate = useNavigate();

    window.scrollTo(0, 0);

    useEffect(() => {
        if (isSubscribedVar === "true") {
            setButtonText("Ви підписані");
        }
        else {
            setButtonText(price === "Безкоштовно" ? `${price}` : `${price} грн`);
        }
    }, [isSubscribedVar, price])

    function onhover() {
        if (isSubscribedVar !== "true")
            setButtonText("Підписатися");
        else
            setButtonText("Відписатися");
    }

    function offhover() {

        if (isSubscribedVar !== "true")
            setButtonText(price === "Безкоштовно" ? `${price}` : `${price} грн`);
        else
            setButtonText("Ви підписані");
    }

    const checkAuth = async event => {
        event.preventDefault();
        if (store.isAuth) {
            switch (isSubscribedVar) {
                case "true": {
                    setIsSubscribedVar("false"); break;
                }
                default: {
                    if (price !== "Безкоштовно")
                        navigate(`/event/payment/${date}/${name}/${location}/${city}/${price}`);
                    else
                        setIsSubscribedVar("true");
                }
            }

        } else {
            navigate('/auth');
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