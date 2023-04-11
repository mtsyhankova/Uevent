import React from 'react';

import "./style.css"

export const Notifications = () => {
    const messagesList = [{ name: "абоба 1", date: "event date", location: "event location" },
    { name: "абоба 2", date: "event date", location: "event location" },
    { name: "абоба 3", date: "event date", location: "event location" },
    { name: "абоба 4", date: "event date", location: "event location" },
    { name: "абоба 5", date: "event date", location: "event location" },
    { name: "абоба 6", date: "event date", location: "event location" }]

    return (
        <div className='notif_box'>
            <p className='notif_upper_text'>Сповіщення</p>
            <div className='notif_message_box'>
                {messagesList.map(item =>
                    <div className='notif_message_item'>
                        <div className='notif_column'>
                            <div className='notif_row'>
                                <p className='notif_date'>{item.date}</p>
                                <p className='notif_location'>{item.location}</p>
                            </div>
                            <p className='notif_name'>{item.name} скоро почнеться!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}