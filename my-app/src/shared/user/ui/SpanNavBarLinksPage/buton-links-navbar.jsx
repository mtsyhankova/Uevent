import React/*, { useState }*/ from 'react';
import { Link } from 'react-router-dom'

import "./style.css"


export const LinksButtonNavBar = ({ links }) => {
    return (
        <div className='box_links'>
            {links.map(item =>
                <Link to="/f,j,f">
                    <div className='button_links_navBar'>
                        <img src={item.icon} className='img_links' alt="aboba" />
                        {item.value}
                    </div>
                </Link>
            )}

        </div>


    )
}
