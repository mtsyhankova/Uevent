import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from "../../../";

import companyAvatar from '../../../asssets/Company/luffy.jpg'
import settings from './assets/settings.png'

import "./style.css"

export const MainCardCompany = () => {
    const { store } = useContext(Context)
    const { idUs, id } = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState("ffffffff");
    const [email, setEmail] = useState([]);
    const [location, setLocation] = useState([]);
    // const filteredUsers = users.filter((el) => {return el.login.includes(search)})
    const [companies, setCompanies] = useState([]);
    const [currentYear, setCurrentYear] = useState();
    const [yearsArray, setYearsArray] = useState([]);
    const [isDropdownShown, setIsDropdownShown] = useState(false);

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getCompanies(idUs);
            setCompanies(data.data)
            const filterCompany = companies.filter((el) => { return el._id.includes(id) })
            setName(filterCompany[0].name)
            setDescription(filterCompany[0].description)
            setEmail(filterCompany[0].email)
            setLocation(filterCompany[0].location)
        }
        getCompanies();
    })

    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else {
            setIsDropdownShown(true);
        }
    }

    const companyData = {
        name: 'abobus1',
        description: 'dwdwddwdvv f ugfufefuegfegfg f eugfe  fuge egf  fuegf efuegf ue fgeugfe   egfe fugfug fu',
        email: 'doejdoiejdoi@gmail.com',
        location: 'dwdwdwd'
    }

    return (
        <div className='card_box_pr'>
            <div>  <img className='img_avatar_pr' src={companyAvatar} alt="aboba" /></div>
            <div className='data_box_cmp'>


                <div className='year_select' onClick={showDropdown}>
                    <p>{name}</p>
                    <div className={isDropdownShown ? 'year_dropdown shown' : 'year_dropdown hidden'}>
                        {companies.map((item, index) =>
                            <Link to={`/companies/${idUs}/${item._id}`} className='year'
                                key={index}>{item.name}</Link>
                        )}
                    </div>
                </div>
                <p className='description_cmp'>{description}</p>
                <p className='data_cmp'>{email}</p>
                <p className='data_cmp'>{location}</p>
            </div>
            <Link className='setting_link_cmp' to='/company/setting'>
                <img className='img_setting_cmp' src={settings} alt="aboba" />
            </Link>
        </div >
    )
}