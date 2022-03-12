import React from 'react'
import loading from "../Component/loading.gif";

const Loading = () => {
    return (
        <div className="text-center">
            <img src={loading} alt="Loading img" />
        </div>
    )
}

export default Loading