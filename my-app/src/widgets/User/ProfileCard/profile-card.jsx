import React from 'react';
import { Link } from 'react-router-dom';
import OtherEventsList from '../../Product/OtherEventsList/other_events_list';
import CompaniesList from '../../Product/CompaniesList/companies_list';
import userAvatar from '../../../asssets/User/luffy.jpg'

import "./style.css"

export const ProfileCard = () => {
    const UpperText1 = "Історія покупок"
    const UpperText2 = "Мої компанії"
    const countMassege = 100;// количство непрочитаніх сообщ
    const userData = { name: 'abobus1', status: 'dwdwddwdvv f ugfufefuegfegfg f eugfe  fuge egf  fuegf efuegf ue fgeugfe   egfe fugfug fu' }

    return (
        <div>
            <div className='card_box_pr'>
                <div>  <img className='img_avatar_pr' src={userAvatar} alt="aboba" /></div>
                <div className='data_user_pr'>
                    <p className='name_user_pr'>{userData.name}</p>
                    <p className='status_user_pr'>{userData.status}</p>
                </div>
                <Link className='message_link_pr' to='/notifications'>
                    {/* <img className='message_img' src={luffy} alt="aboba" /> */}
                    <div className='count_message_block_pr'>
                        {countMassege > 99 ? <p>99+</p> : <p>{countMassege}</p>}
                    </div>
                </Link>
            </div>

            <OtherEventsList UpperText={UpperText1} />
            <CompaniesList />
        </div>)


}