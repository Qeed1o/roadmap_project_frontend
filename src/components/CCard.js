import React from 'react';

import './CCard.css';

function CCard({id, name, timeStart, timeEnd = null}){
    return(
        <div class={`task-card id-${id}`}>
            <h1 class="name">{name}</h1>
            <p class="time">Started: {timeStart}</p>
            <p class="time">{timeEnd ? `Closed: ${timeEnd}` : ''} </p>
        </div>
    )
}

export default CCard;