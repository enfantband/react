import React, {useState, useEffect} from 'react';

function ReactHook(pros){

    const [fff, getContents] = useState('[THIS IS REACT]');


    useEffect(() => {
        alert('use Effect');
    });

    return (
        <div style={{padding: "0px"}}> 
            <h2>{fff} lll</h2>
            <button onClick={() => getContents('[THIS IS HOOK]')}>  버튼 </button>
        </div>
    )
}


export default ReactHook;