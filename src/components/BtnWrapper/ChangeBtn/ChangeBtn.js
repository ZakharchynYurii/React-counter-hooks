import React from 'react';
import './ChangeBtn.css'

const ChangeBtn = ({onIncrement, onDecrement, counter}) => {
    return(
        <div className={'changeBtn'}>
            <button className={'customBtn changeBtnCustom'} onClick={() => onIncrement(counter + 1)}>Increment</button>
            <button className={'customBtn changeBtnCustom'} onClick={() => onDecrement(counter - 1)}>Decrement</button>
        </div>
    );
}

export default ChangeBtn;