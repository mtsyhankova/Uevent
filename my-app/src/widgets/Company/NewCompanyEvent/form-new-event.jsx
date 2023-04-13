import React/*, { useState }*/ from 'react';
import { /*useParams, useNavigate, Link*/ } from 'react-router-dom';
import companyAvatar from '../../../asssets/Company/luffy.jpg'

import "./style.css"

export const FormNewEvent = () => {
    return (
        <div className='card_box_pr'>
            <form className='form_cmp'>
                <div className='header_form_cmp'>Новий івент</div>
                <div className='update_avatar_form_cmp'>
                    <div>  <img className='img_avatar_pr' src={companyAvatar} alt="aboba" /></div>
                    {/*  <input className='input_file_from_cmp' type="file" /> */}
                    <label class="feedback_label">
                        Загрузити файл
                        <input type="file" id="file_in" class="feedback_file" />
                    </label>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Назва івенту:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть назву компанії' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Опис івенту</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть опис компанії' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Дата</span>
                    <input className='input_from_cmp' type="date" id="start" name="trip-start"

                    />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Локація:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть локацію' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Місто:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть локацію' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Ціна:</span>
                    <input className='input_from_cmp' required type="number" placeholder='Введіть локацію' />
                </div>

                <button className='update_button_form_cmp' >Створити івент</button>
            </form>
        </div>
    )
}