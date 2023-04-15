
import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

import { Context } from "../../../../../";

// import luffy from './assets/luffy.jpg'

import "./style.css"

export const ProfileExit = () => {
    const { store } = useContext(Context)

    let navigate = useNavigate();
    const logo = store.user.img; /////////////////////////aboba 
    const link = "/profile/" + store.user.id
    // const userInfo = JSON.parse(JSON.stringify(store.user))
    // const aaa = ('../../' + userInfo.img).toString()
    // // // const logo1 = userInfo.toString()
    // console.log(store.user.img)
    // //let logo2 = require(store.user.img)
    // console.log('==============')
    // console.log(logo2)
    // console.log(typeof (logo2))
    // console.log(typeof (logo2))
    // userInfo = require(logo);
    // console.log(userInfo)
    const exitFunc = async event => {
        await store.logout()
        navigate('/');
    }

    return (
        <div className='flex_row'>
            <Link to={link} className='profile_btn'>
                <img className='profile_img' src={logo} alt="aboba" />
            </Link>
            <Link onClick={exitFunc} to="/auth" className='authbtn'>
                Вихід
            </Link>
        </div>
    )
}