import React, {useState} from 'react'

function Info(props) {
    const [stat, changeStat] = useState('Show more');
    const [state, set] = useState(false);
    

    const data = {
        info: props.text,
        trunc: props.text.slice(0, 200),
        isTrunc: state,
    }

    const [datum, setData] =useState(data.trunc);

    const show = function(){
        if (data.isTrunc) {
            setData(data.info)
            changeStat('Show less');
            set(false);
        } else {
            setData(data.trunc);
            changeStat('... Show more');
            set(true);
        }
    }
    return (
        <div className="tour-info">
            <p>{datum}<button onClick={show}>{stat}</button></p>
            
        </div>
    )
}

export default Info
