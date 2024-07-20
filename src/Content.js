import React, {useState} from 'react';

const Content = ({props}) => {
    const [click, setclick] = useState("Not Clicked");
    return(
        <div>
            <button onClick={() => setclick("Clicked")} >
                {click}
            </button>
        </div>
    )
}

export default Content

