import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import luffy from './assets/luffy.jpg';

import "./style.css"

export const ProfileCard = () => {
    const { date, name, location, city, price } = useParams();
    const [buttonText, setButtonText] = useState([`${price} грн`]);
    const [subsPage, setSubsPage] = useState([0]);
    const [eventsPage, setEventsPage] = useState([0]);
    let navigate = useNavigate();

    const subsNames = [{ name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }]
    const organizersEvents = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" }]
    const comments = [{ name: 'Перший', content: 'бла бла бла' }, { name: 'Другий', content: 'бла бла бла' }, { name: 'Третій', content: 'бла бла бла' }]

    function onhover() {
        setButtonText("Підписатися");
    }

    function offhover() {
        setButtonText(`${price} грн`);
    }

    return (<div>
        <div className='profile_card_box'>
            <div>  <img className='profile_img' src={luffy} alt="aboba" /></div>
            <div className='event_opened_name_box'>
                <p className='event_opened_name'>bjhabjhbfjhdbfjb здрасьте</p>
            </div>

            {/* <div className='event_opened_flex_row'>
                <img className='event_opened_img' src={luffy} alt="aboba" />

                <div className='event_opened_flex_col'>
                    <div className='event_opened_flex_row'>
                        <p className='event_opened_date'>{date}</p>
                        <p className='event_opened_date'>{location}, {city}</p>
                    </div>

                    <span className='event_opened_button' onMouseEnter={onhover} onMouseLeave={offhover}>{buttonText}</span>

                    <p className='event_opened_description'>Опис події</p>
                    <p className='event_opened_date'> бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла</p>
                </div>
            </div> */}
        </div>


    </div>)


}