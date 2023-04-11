import React from 'react';
import { MainPageEventList } from '../MainPageEventList'

import "./style.css"

export const MainPageCatList = () => {
    const itemsBurger = [
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },
        { id: '1bdehbjjebde', value: "КОНЦЕРТИ В ЄВРОПІ" },]

    const eventItems = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" }]

    return (
        <div>
            {itemsBurger.map(item =>
                <div className='box_product_main_page'>
                    <div className='category_prodyct'>{item.value}</div>
                    <MainPageEventList eventItems={eventItems} categoruID={item.id} />
                </div>)}
        </div>
    )
}

