import React from 'react';

const Action = (props) => (
    <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What Should I do?</button>
        <hr></hr>
    </div>
)

export default Action;