import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import { BurgerButton } from './components/buger-buttun/index';
import { MenuBurger } from './components/buger-buttun/menu-burger-btn/menu'
import "./style.css"


export const NavBar = () => {
    const isAuth = false //  временная переменная определяющая авторизирован ли пользователь 
    const itemsBurger = [{ value: "1111111", href: "/", icon: "anchor" },
    { value: "2222222", href: "*", icon: "anchor" },
    { value: "3333333", href: "/", icon: "anchor" },
    { value: "4444444", href: "/", icon: "api" },]

    const mainLinks = [{ value: "Авіаквитки", href: "/", icon: "" },
    { value: "Готелі", href: "/", icon: "" },
    { value: "Трансфери", href: "/", icon: "" },
    { value: "Діяльність", href: "/", icon: "" },
    { value: "Походи", href: "/", icon: "" },
    { value: "Пам'ятки", href: "/", icon: "" },
    { value: "Пригоди", href: "/", icon: "" },
    { value: "Альпінізм", href: "/", icon: "" },
    { value: "Їзда на велосипеді", href: "/", icon: "" }]

    const [menuActive, setMenuActive] = useState(false);
    return (

        <nav className='nav_bar_box'>
            {isAuth === false ? <div>
                <BurgerButton active={menuActive} setActive={setMenuActive} />
                <MenuBurger active={menuActive} setActive={setMenuActive} header={'ddeded'} items={itemsBurger} />
            </div> : ''}

        </nav>


    )
}
