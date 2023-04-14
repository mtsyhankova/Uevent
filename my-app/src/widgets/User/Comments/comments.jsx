import React from 'react';
import luffy from './assets/luffy.jpg';

import "./style.css"

const Comments = () => {
    const commentsList = [{ name: 'Перший', content: 'бла бла бла' }, { name: 'Другий', content: 'бла бла бла' }, { name: 'Третій', content: 'бла бла бла' }]

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>Коментарі</p>
            {commentsList.map((item, index) =>
                <div className='event_opened_flex_row' key={index}>
                    <img src={luffy} alt="aboba" className='event_opened_comment_avatar' />

                    <div className='event_opened_flex_col'>
                        <p className='event_opened_comment_name'>{item.name}</p>
                        <p className='event_opened_comment_content'>{item.content}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Comments;