import React, { useState } from 'react';

import "./style.css"

const Regpage = () => {
    const [/*email,*/ setEmail] = useState([]);
    const [/*password,*/ setPassword] = useState([]);
    const [error/*, setError*/] = useState('');

    const loginFunc = async event => {
        event.preventDefault();
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

                <div className='aboba'><button className='reg_button' onClick={loginFunc}>Зареєструватися</button></div>
            </form>
        </div>
    )
}
export default Regpage;