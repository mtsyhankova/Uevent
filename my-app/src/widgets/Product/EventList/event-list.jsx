import React from 'react';
import { EventItem } from '../EventItem'

import "./style.css"

export const EventList = () => {
    const itemsBurger = [
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },]

    const eventItems = [{ date: "12.04.2023", name: "Абобус", location: "Київ", price: "200" },
    { date: "15.04.2023", name: "Абобус", location: "Чернівці", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Харків", price: "150" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "17.05.2023", name: "Абобіще", location: "Луцьк", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Львів", price: "300" }]

    return (
        <div>
            {itemsBurger.map(item =>
                <div className='box_product_main_page'>
                    <div className='category_prodyct'>{item.value}</div>
                    <EventItem eventItems={eventItems} categoruID={item.id} />
                </div>)}
        </div>
    )
}

