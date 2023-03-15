import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"


export const AuthButtons = () => {
    return (
        <div>
            <Link to="#" className='authbtn'>
                Авторизація
            </Link>
            <Link to="#" className='authbtn'>
                Реєстрація
            </Link>
        </div>
    )
}