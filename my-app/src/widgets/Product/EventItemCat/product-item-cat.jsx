import React, { useState } from 'react';
import Pagination from '../Pagination/pagination';
import EventItem from '../EventItem/event_item';

import "./style.css"

export const ProductItemsCat = ({ areYouAuthor }) => {
    const [page, setPage] = useState([0]);

    const eventItems = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" }]

    return (
        <div>
            <div className='box_one_category_product_c'>
                {eventItems.slice(page * 12, page * 12 + 12).map(item =>
                    <EventItem areYouAuthor={areYouAuthor} date={item.date} name={item.name} location={item.location} city={item.city} price={item.price} />
                )}
            </div>
            <Pagination quantity={eventItems.length} numberForPage={12} current={page} change={setPage} />
        </div>
    )
}