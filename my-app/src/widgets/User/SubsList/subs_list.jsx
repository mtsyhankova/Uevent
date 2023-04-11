import React, { useState } from 'react';
import Pagination from '../../Product/Pagination/pagination';

const SubsList = () => {
    const [subsPage, setSubsPage] = useState([0]);
    const subsNames = [{ name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus1' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus2' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }, { name: 'abobus3' }]

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>Список підписників</p>
            <div className='event_opened_flex_row'>
                {subsNames.slice(subsPage * 5, subsPage * 5 + 5).map(item =>
                    <div className='event_opened_flex_row'>
                        <div className='event_opened_circle'></div>
                        <p className='event_opened_subname'>{item.name}</p>
                    </div>
                )}
            </div>
            <Pagination quantity={subsNames.length} numberForPage={5} current={subsPage} change={setSubsPage} />
        </div>
    )
}
export default SubsList;