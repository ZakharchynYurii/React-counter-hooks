import React from 'react';
import './ScoreTitle.css'

const ScoreTitle = ({counter}) => {
    return(
        <h2 className={'scoreTitle'}>Counter score: {counter}</h2>
    );
}

export default ScoreTitle;