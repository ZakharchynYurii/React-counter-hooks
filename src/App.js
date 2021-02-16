import React, {useState} from 'react';
import './App.css';
import BtnWrapper from "./components/BtnWrapper/BtnWrapper/BtnWrapper";
import TitleWrapper from "./components/TitleWrapper/TitleWrapper/TitleWrapper";

const App = () => {
    let [counter, setCounter] = useState(0)

    const onIncrement = () => {setCounter(counter + 1)}

    const onDecrement = () => {setCounter(counter - 1)}

    const onReset = () => {setCounter(0)}

    return(
        <div className={'container'}>
            <TitleWrapper counter={counter}/>
            <BtnWrapper counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} onReset={onReset}/>
        </div>
    );
}

export default App;