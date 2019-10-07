import React from 'react'

const Action = (props) =>(
    <div>
        <button
            className="big-button"
            onClick={props.handlePickOptions}
            disabled={!props.HasOptions}
        >
        What should i do?
            </button>
    </div>
);

export default Action