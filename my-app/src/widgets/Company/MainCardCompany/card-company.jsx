import React/*, { useState }*/ from 'react';
import { /*useParams, useNavigate,*/ Link } from 'react-router-dom';

import companyAvatar from '../../../asssets/Company/luffy.jpg'
import settings from './assets/settings.png'

import "./style.css"

export const MainCardCompany = () => {
    const companyData = {
        name: 'abobus1',
        description: 'dwdwddwdvv f ugfufefuegfegfg f eugfe  fuge egf  fuegf efuegf ue fgeugfe   egfe fugfug fu',
        email: 'doejdoiejdoi@gmail.com',
        location: 'dwdwdwd'
    }

    return (
        <div className='card_box_pr'>
            <div>  <img className='img_avatar_pr' src={companyAvatar} alt="aboba" /></div>
            <div className='data_box_cmp'>
                {/* <p className='name_cmp'>{companyData.name}</p> */}
                <select className='name_cmp'>
                    <option>{companyData.name}</option>
                    <option>Київ</option>
                    <option>Харків</option>
                    <option>Чернівці</option>
                </select>
                <p className='description_cmp'>{companyData.description}</p>
                <p className='data_cmp'>{companyData.email}</p>
                <p className='data_cmp'>{companyData.location}</p>
            </div>
            <Link className='setting_link_cmp' to='/company/setting'>
                <img className='img_setting_cmp' src={settings} alt="aboba" />
            </Link>
        </div>
    )
}