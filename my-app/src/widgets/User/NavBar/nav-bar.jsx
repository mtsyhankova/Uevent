import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import { LinksButtonNavBar } from "./../../../shared/user/ui/SpanNavBarLinksPage"
import { BurgerButton, ProfileExit } from './components';
import { MenuBurger } from './components'
import { AuthButtons } from './components'
import { SearchButton } from './components'
import { MenuSearch } from './components'
import { mainLinksTemp } from "./model/store-links"

import "./style.css"
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const isAuth = false //  временная переменная определяющая авторизирован ли пользователь 
    const itemsBurger = [{ value: "Усі події", href: "/", icon: "anchor" },
    { value: "Про нас", href: "*", icon: "anchor" },
    { value: "Контакти", href: "/", icon: "anchor" },
    { value: "Оплата", href: "/", icon: "api" },]

    const [menuActive, setMenuActive] = useState(false);
    const [menuSearchActive, setMenuSearchActive] = useState(false);
    return (
        <nav className='nav_bar_box'>
            <div>
                <div className='header_box_navBar'>
                    <div className='flex_row_nv'>
                        <BurgerButton active={menuActive} setActive={setMenuActive} />
                        <MenuBurger active={menuActive} setActive={setMenuActive} header={'ddeded'} items={itemsBurger} />
                        <Link to='/' className='home_nema'>ᑗᙍᐻᙍᘉᖶ</Link>
                    </div>

                    {isAuth === false ?
                        <div className="marg_bot_aut"><AuthButtons /></div>
                        :
                        <div className="marg_bot_aut"><ProfileExit /></div>}

                </div>

                <div className='links_box'>
                    <LinksButtonNavBar links={mainLinksTemp} />
                    <div>
                        <SearchButton active={menuSearchActive} setActive={setMenuSearchActive} />
                        <MenuSearch active={menuSearchActive} setActive={setMenuSearchActive} />
                    </div>
                </div>
            </div>
        </nav>
    )
}