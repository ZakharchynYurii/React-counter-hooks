import React from 'react';
import './TitleWrapper.css'
import Title from "../Title/Title";
import ScoreTitle from "../ScoreTitle/ScoreTitle";

const TitleWrapper = ({counter}) => {
    return(
        <div className={'titleWrapper'}>
            <Title/>
            <ScoreTitle counter={counter}/>
        </div>
    );
}

export default TitleWrapper;