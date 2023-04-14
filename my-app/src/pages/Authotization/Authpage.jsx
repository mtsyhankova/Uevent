import React, { useState, useContext } from 'react';
import { login } from "./store"
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";


import "./style.css"

const Authpage = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');
    const { store } = useContext(Context)

    let navigate = useNavigate();

    const loginFunc = async event => {
        event.preventDefault();
        const errorMessage = await login(email, password, store);

        if (errorMessage !== true) {
            setError(errorMessage.response.data.message)
        }
        else {
            navigate('/');
        }
    }

    return (
        <div>
            <form className='auth_page'>
                <span className='auth_pagetitle'>Авторизація</span>

                <div className='auth_login'>
                    <span className='auth_span'>Ел. пошта:</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='auth_pass'>
                    <span className='auth_span'>Пароль:</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='auth_link'><a href="/reset_password">Забули пароль?</a></div>
                <div className='auth_link'><a href="/reg">Ще немає аккаунту?</a></div>
                <div className='aboba'><button className='auth_button' onClick={loginFunc}>Увійти</button></div>
            </form>
        </div>
    )
}
export default Authpage;