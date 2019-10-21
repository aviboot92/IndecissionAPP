import React from 'react';
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Here are our options below:-</h3>
                <button className="button button--link removeAll" disabled={!props.hasOptions} onClick={props.handleRemoveAll}>Remove ALL</button>
                {props.options.length === 0 && <p>Please enter options to get started</p>}
            </div>

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