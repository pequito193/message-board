import React, { useState, useEffect } from "react";

function Messages() {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch('./../api').then(
            response = response.json()
        ).then(
            data => {
                setData(data)
            }
        );
        console.log('sucessful fetch')
    }, [])

    return(
        <React.Fragment>
            <div className="messages-display">
                {data}
            </div>
        </React.Fragment>
    )
}

export default Messages;