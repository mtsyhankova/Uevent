import React, { useState } from 'react';
import { UserItem } from '../UserItem'
// import { useNavigate } from 'react-router-dom';

import "./style.css"

const userList = [{ name: "abobus1", email: "aboba1@gmail.com" },
{ name: "abobus2", email: "aboba2@gmail.com" },
{ name: "abobus3", email: "aboba3@gmail.com" },
{ name: "aboba1", email: "aboba4@gmail.com" },
{ name: "aboba2", email: "apple1@gmail.com" },
{ name: "aboba3", email: "apple2@gmail.com" },
{ name: "aboba4", email: "apple3@gmail.com" },
{ name: "apple1", email: "zhopa1@gmail.com" },
{ name: "apple2", email: "zhopa2@gmail.com" },
{ name: "apple3", email: "zhopa3@gmail.com" },
{ name: "zhopa1", email: "abobus1@gmail.com" },
{ name: "zhopa2", email: "abobus2@gmail.com" },
{ name: "zhopa3", email: "abobus3@gmail.com" }]

export const AdminPanel = () => {
    const [select, setSelect] = useState('name');
    const [search, setSearch] = useState('');
    // let navigate = useNavigate();

    const filteredUserList = userList.filter((el) => {
        if (search === '') {
            return el;
        }
        else {
            if (select === 'name')
                return el.name.toLowerCase().includes(search.toLowerCase())
            else
                return el.email.toLowerCase().includes(search.toLowerCase())
        }
    })

    return (
        <div className='admin_panel_box'>
            <p className='admin_panel_uppertext'>Список користувачів</p>

            <div className='admin_panel_listbox'>
                <input className='admin_panel_input' type="text" placeholder='search users...' value={search} onChange={e => setSearch(e.target.value)} />
                <select className='admin_panel_select' value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="name">by name</option>
                    <option value="email">by email</option>
                </select>
            </div>

            <div className='admin_panel_listbox'>
                {filteredUserList.map((item, index) =>
                    <UserItem name={item.name} email={item.email} key={index} />
                )}
            </div>
        </div>
    )
}