import React, { useState } from 'react';
import luffy from './assets/luffy.jpg'
import Pagination from '../Pagination/pagination';

import "./style.css"

export const ProductItemsCat = () => {
    const [page, setPage] = useState([0]);

    const eventItems = [{ date: "12.04.2023", name: "Абобус", location: "Київ", price: "200" },
    { date: "15.04.2023", name: "Абобус", location: "Чернівці", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Харків", price: "150" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" }]

    return (
        <div>
            <div className='box_one_category_product_c'>
                {
                    eventItems.slice(page * 4, page * 4 + 4).map(item =>
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
                    )
                }
            </div>
            <Pagination quantity={eventItems.length} numberForPage={4} current={page} change={setPage} />
        </div>
    )
}