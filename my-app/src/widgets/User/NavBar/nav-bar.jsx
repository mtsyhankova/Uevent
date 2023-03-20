import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import { LinksButtonNavBar } from "./../../../shared/user/ui/SpanNavBarLinksPage"
import { BurgerButton } from './components';
import { MenuBurger } from './components'
import { AuthButtons } from './components'
import { SearchButton } from './components'
import { MenuSearch } from './components'


import { mainLinksTemp } from "./model/store-links"

import "./style.css"


export const NavBar = () => {
    const isAuth = false //  временная переменная определяющая авторизирован ли пользователь 
    const itemsBurger = [{ value: "1111111", href: "/", icon: "anchor" },
    { value: "2222222", href: "*", icon: "anchor" },
    { value: "3333333", href: "/", icon: "anchor" },
    { value: "4444444", href: "/", icon: "api" },]



    const [menuActive, setMenuActive] = useState(false);
    const [menuSearchActive, setMenuSearchActive] = useState(true);
    return (

        <nav className='nav_bar_box'>
            {isAuth === false ? <div>
                <div className='header_box_navBar'>
                    <div>
                        <BurgerButton active={menuActive} setActive={setMenuActive} />
                        <MenuBurger active={menuActive} setActive={setMenuActive} header={'ddeded'} items={itemsBurger} />
                    </div>
                    <AuthButtons />
                </div>

                <div className='links_box'>

                    <LinksButtonNavBar links={mainLinksTemp} />
                    <div>
                        <SearchButton active={menuSearchActive} setActive={setMenuSearchActive} />
                        <MenuSearch active={menuSearchActive} setActive={setMenuSearchActive} />

                    </div>
                </div>
            </div> : ''}

        </nav>


    )
}
