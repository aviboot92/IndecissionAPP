import React from 'react';

const Option = (props) => {
    return (
        <li className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button className="button button--link" onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>
        </li>
    )
}

export default Option;