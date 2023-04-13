import React, { useState } from 'react';
import { registration } from "./model/store"
import { useNavigate } from 'react-router-dom';

import "./style.css"

const Regpage = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const signupFunc = async event => {
        event.preventDefault();
        const aboba = await registration(email, password);

        if (aboba !== undefined) {
            setError(aboba.response.data.message)
        }
        else {
            navigate('/home');
        }
    }

    return (
        <div>
            <form className='auth_page'>
                <span className='auth_pagetitle'>Регістрація</span>

                <div className='auth_login'>
                    <span className='auth_span'>Ел. пошта:</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='auth_pass'>
                    <span className='auth_span'>Пароль:</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button onClick={signupFunc} className='reg_button' >Зареєструватися</button></div>
            </form>
        </div>
    )
}
export default Regpage;