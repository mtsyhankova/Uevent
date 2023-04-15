import React, { useState, useContext } from 'react';
import companyAvatar from '../../../asssets/Company/luffy.jpg'
import { Context } from "../../../";

import "./style.css"

export const ProfileSettingsForm = () => {
    const { store } = useContext(Context)

    const [userName, setUserName] = useState(store.user.name);
    const [userStatus, setUserStatus] = useState(store.user.status ? store.user.status : '');
    const [userEmail, setUserEmail] = useState(store.user.email)

    const [picture, setPicture] = useState([]);
    // const [img, setImg] = useState();
    const img = store.user.img


    const updateUser = async event => {
        event.preventDefault();

        const files = picture
        console.log('-------------------------------')
        console.log(files)
        console.log('===============================')
        console.log(typeof (files))
        const errorMessage = await store.updateUser(files, userName, userStatus);

        // if (errorMessage !== true) {
        //     setError(errorMessage.response.data.message)
        // }
        // else {
        //     navigate('/');
        // }

    }



    const fileUploadHandler = async event => {

    }


    // const onChangePicture = e => {
    //     // console.log('picture: ', picture);
    //     setImg(URL.createObjectURL(e.target.files[0]));

    //     // console.log(picture)
    // };

    return (
        <form className='profset_box'>
            <p className='profset_upper_text'>Налаштування профілю</p>
            {console.log(img)}
            <img className='profset_avatar' alt="aboba" />
            <label className="profset_avatar_label">
                Загрузити аватар
                <input type="file" name="file" onChange={(event) => setPicture(event.target.files)} id="file_in" className="profset_avatar_input" />
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
            <button className='profset_button' onClick={updateUser} >Змінити данні</button>

        </form>
    )
}
