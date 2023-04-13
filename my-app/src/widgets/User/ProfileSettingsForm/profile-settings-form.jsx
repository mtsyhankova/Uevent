import React from 'react';
import companyAvatar from '../../../asssets/Company/luffy.jpg'

import "./style.css"

export const ProfileSettingsForm = () => {
    return (
        <form className='profset_box'>
            <p className='profset_upper_text'>Налаштування профілю</p>

            <img className='profset_avatar' src={companyAvatar} alt="aboba" />
            <label class="profset_avatar_label">
                Загрузити аватар
                <input type="file" id="file_in" class="profset_avatar_input" />
            </label>

            <div className='profset_editable_box'>
                <div className='profset_row'>
                    <div className='profset_col'>
                        <p className='pofset_input_text'>Ім'я: </p>
                        <p className='pofset_input_text'>Статус: </p>
                        <p className='pofset_input_text'>Імейл: </p>
                        <p className='pofset_input_text'>Пароль: </p>
                    </div>
                    <div className='profset_col'>
                        <input className='profset_input' placeholder='current name' type="text" />
                        <input className='profset_input' placeholder='current status' type="text" />
                        <input className='profset_input' placeholder='current email' type="text" />
                        <input className='profset_input' placeholder='current password' type="text" />
                    </div>
                </div>
            </div>
            <button className='profset_button' >Змінити данні</button>
        </form>
    )
}