import React/*, { useState }*/ from 'react';
import { /*useParams, useNavigate,*/ Link } from 'react-router-dom';

import companeAvatar from '../../../asssets/Compane/luffy.jpg'
import settings from './assets/settings.png'

import "./style.css"


export const MainCardCompane = () => {
    const companeData = {
        name: 'abobus1',
        description: 'dwdwddwdvv f ugfufefuegfegfg f eugfe  fuge egf  fuegf efuegf ue fgeugfe   egfe fugfug fu',
        email: 'doejdoiejdoi@gmail.com',
        location: 'dwdwdwd'
    }


    return (<div>
        <div className='card_box_pr'>
            <div>  <img className='img_avatar_pr' src={companeAvatar} alt="aboba" /></div>
            <div className='data_box_cmp'>
                {/* <p className='name_cmp'>{companeData.name}</p> */}
                <select className='name_cmp'>
                    <option>{companeData.name}</option>
                    <option>Київ</option>
                    <option>Харків</option>
                    <option>Чернівці</option>
                </select>
                <p className='description_cmp'>{companeData.description}</p>
                <p className='data_cmp'>{companeData.email}</p>
                <p className='data_cmp'>{companeData.location}</p>
            </div>
            <Link className='setting_link_cmp' to='#'>
                <img className='img_setting_cmp' src={settings} alt="aboba" />
            </Link>

        </div>

    </div>)


}