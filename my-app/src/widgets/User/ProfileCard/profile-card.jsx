import React/*, { useState }*/ from 'react';
import { /*useParams, useNavigate,*/ Link } from 'react-router-dom';

import luffy from './assets/luffy.jpg';

import "./style.css"

export const ProfileCard = () => {
    // const { date, name, location, city, price } = useParams();
    // const [buttonText, setButtonText] = useState([`${price} грн`]);
    // const [subsPage, setSubsPage] = useState([0]);
    // const [eventsPage, setEventsPage] = useState([0]);
    // let navigate = useNavigate();

    const countMassege = 100;// количство непрочитаніх сообщ

    const userData = { name: 'abobus1', status: 'dwdwddwdvv f ugfuegfe fugfug fu' }

    // const organizersEvents = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" }]
    // const comments = [{ name: 'Перший', content: 'бла бла бла' }, { name: 'Другий', content: 'бла бла бла' }, { name: 'Третій', content: 'бла бла бла' }]

    // function onhover() {
    //     setButtonText("Підписатися");
    // }

    // function offhover() {
    //     setButtonText(`${price} грн`);
    // }

    return (<div>
        <div className='profile_card_box'>
            <div>  <img className='profile_page_img' src={luffy} alt="aboba" /></div>
            <div className='event_opened_name_box'>
                <p className='event_opened_name'>{userData.name}</p>
                <p className='event_opened_name'>{userData.status}</p>
            </div>
            <Link className='message_link' to='#'>
                {/* <img className='message_img' src={luffy} alt="aboba" /> */}
                <div className='count_message_block'>
                    {countMassege > 99 ? <p>99+</p> : <p>{countMassege}</p>}
                </div>

            </Link>
        </div>


    </div>)


}