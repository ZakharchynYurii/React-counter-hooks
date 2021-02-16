import React from 'react';
import './ResetBtn.css'

const ResetBtn = ({onReset}) => {
    return(
        <div className={'resetBtn'}>
            <button className={'customBtn resetBtnCustom'} onClick={() => onReset(0)}>RESET</button>
        </div>
    );
}

export default ResetBtn;