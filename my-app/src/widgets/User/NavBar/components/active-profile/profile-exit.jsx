
import React from 'react';
import { Link } from 'react-router-dom'
import luffy from './assets/luffy.jpg'

import "./style.css"

export const ProfileExit = () => {
    return (
        <div className='flex_row'>
            <Link to="/profile" className='profile_btn'>

                <img className='profile_img' src={luffy} alt="aboba" />


            </Link>
            <Link to="/reg" className='authbtn'>
                Вихід
            </Link>
        </div>
    )
}