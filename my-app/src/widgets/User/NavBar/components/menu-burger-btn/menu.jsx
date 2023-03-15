import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"


export const MenuBurger = ({ active, setActive, header, items }) => {
    return (
        < div className={active ? ' menu_burger active' : ' menu_burger'} onClick={() => setActive(false)} >
            <div className='menu_blur'>
                <div className='menu__content' onClick={e => e.stopPropagation()}>
                    <div className='menu__header'>{header}</div>
                    <ul>
                        {items.map(item =>
                            <li>
                                <Link to={item.href} className='menu__link'>{item.value}/</Link>
                                <i class="large material-icons">insert_chart</i>

                                {/* <span className='material-icons'>{item.icon}</span> */}
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
