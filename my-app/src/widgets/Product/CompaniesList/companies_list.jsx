import React, { useState } from 'react';
import Pagination from '../../Product/Pagination/pagination';
import CompanyItem from '../CompanyItem/company_item';

const CompaniesList = () => {
    const [page, setPage] = useState([0]);
    const companies = [{ name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" }]

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>Мої компанії</p>
            <div className='event_opened_flex_row'>
                {companies.slice(page * 3, page * 3 + 3).map(item =>
                    <CompanyItem name={item.name} location={item.location} email={item.email} />
                )}
            </div>
            <Pagination quantity={companies.length} numberForPage={3} current={page} change={setPage} />
        </div>
    )
}
export default CompaniesList;