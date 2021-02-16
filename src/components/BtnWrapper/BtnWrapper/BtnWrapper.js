import React from 'react';
import './BtnWrapper.css'
import ChangeBtn from "../ChangeBtn/ChangeBtn";
import ResetBtn from "../ResetBtn/ResetBtn";

const BtnWrapper = ({counter, onIncrement, onDecrement, onReset}) => {
    return(
        <div className={'btnWrapper'}>
            <ChangeBtn counter={counter} onIncrement={onIncrement} onDecrement={onDecrement}/>
            <ResetBtn onReset={onReset}/>
        </div>
    );
}

export default BtnWrapper;