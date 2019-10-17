import React from 'react';
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleRemoveAll}>Remove ALL</button>
            {props.options.length === 0 && <p>Please enter options to get started</p>}
            <h3>Here are our options below:-</h3>
            <ol>
                {
                    props.options.map((option, i) => {
                        return <Option
                            key={option}
                            option={option}
                            handleDeleteOption={props.handleDeleteOption} />
                    })
                }
            </ol>
        </div>
    )
}

export default Options;