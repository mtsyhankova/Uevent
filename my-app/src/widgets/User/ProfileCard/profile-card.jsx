import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../..";

import OtherEventsList from '../../Product/OtherEventsList/other_events_list';
import CompaniesList from '../../Product/CompaniesList/companies_list';

import userAvatar from '../../../asssets/User/luffy.jpg'
import settings from './assets/settings.png'

import "./style.css"

export const ProfileCard = () => {
    const { store } = useContext(Context)


    const UpperText1 = "Історія покупок"
    // const UpperText2 = "Мої компанії"
    const countMassege = 100;// количство непрочитаніх сообщ
    const userData = { name: 'abobus1', status: 'dwdwddwdvv f ugfufefuegfegfg f eugfe  fuge egf  fuegf efuegf ue fgeugfe   egfe fugfug fu' }

    return (
        <div>
            <div className='card_box_pr'>
                <div>  <img className='img_avatar_pr' src={userAvatar} alt="aboba" /></div>
                <div className='data_user_pr'>
                    <p className='name_user_pr'>{store.user.name}</p>
                    <p className='status_user_pr'>Статус:{store.user.status}</p>
                </div>
                <div className='box_link_button_pr'>
                    <Link className='message_link_pr' to='/notifications'>
                        {/* <img className='message_img' src={luffy} alt="aboba" /> */}
                        <div className='count_message_block_pr'>
                            {countMassege > 99 ? <p>99+</p> : <p>{countMassege}</p>}
                        </div>
                    </Link>
                    <Link className='setting_link_cmp' to='/profile/settings'>
                        <img className='img_setting_cmp' src={settings} alt="aboba" />
                    </Link>
                </div>
            </div>
            <OtherEventsList UpperText={UpperText1} />
            <CompaniesList />
        </div>)


}