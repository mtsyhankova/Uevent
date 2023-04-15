import React, { useState, useContext } from 'react';
import companyAvatar from '../../../asssets/Company/luffy.jpg'
import { Context } from "../../../";

import "./style.css"

export const ProfileSettingsForm = () => {
    const { store } = useContext(Context)

    const [userName, setUserName] = useState(store.user.name);
    const [userStatus, setUserStatus] = useState(store.user.status ? store.user.status : '');
    const [userEmail, setUserEmail] = useState(store.user.email)

    const [picture, setPicture] = useState();
    const [img, setImg] = useState();

    const updateUser = async event => {
        event.preventDefault();
        const errorMessage = await store.updateUser(picture, userName, userStatus);

        // if (errorMessage !== true) {
        //     setError(errorMessage.response.data.message)
        // }
        // else {
        //     navigate('/');
        // }

    }
    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));

        console.log(picture)
    };

    return (
        <form className='profset_box'>
            <p className='profset_upper_text'>Налаштування профілю</p>

            <img className='profset_avatar' src={img} alt="aboba" />
            <label className="profset_avatar_label">
                Загрузити аватар
                <input type="file" id="file_in" className="profset_avatar_input" onChange={onChangePicture} />
            </label>

            <div className='profset_editable_box'>
                <div className='profset_row'>
                    <div className='profset_col'>
                        <p className='pofset_input_text'>Ім'я: </p>
                        <p className='pofset_input_text'>Статус: </p>
                        <p className='pofset_input_text'>Імейл: </p>
                    </div>
                    <div className='profset_col'>
                        <input className='profset_input' placeholder='current name' type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                        <input className='profset_input' placeholder='current status' type="text" value={userStatus} onChange={e => setUserStatus(e.target.value)} />
                        <input className='profset_input' placeholder='current email' type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                    </div>
                </div>
            </div>
            <button className='profset_button' onClick={updateUser}>Змінити данні</button>
        </form>
    )
}