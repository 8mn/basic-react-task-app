import React from 'react'
import uniqid from "uniqid";

function Overview(props){

    const {tasks} = props;

    return(
        <div>
            <ul>
            {tasks.map((task) => {
            return <li key={uniqid()}>{task}</li> })}
            </ul>
        </div>
    )
}

export default Overview;