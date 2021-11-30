import React, {useState} from 'react'
import light from '../../images/light.png';
import dark from '../../images/dark.png';


function Mode() {

    const [state, setState] = useState(light);
    const changeMode = function() {
        if(state === light){
            setState(dark);
        }
        else{
            setState(light);
        }
    }
    return (
        <div onClick={changeMode} className="mode">
            <img src={state} alt="light or dark mode" className="mode"/>
        </div>
    )
}

export default Mode;
