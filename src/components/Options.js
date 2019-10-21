import React from 'react';
import Option from "./Option";
var divStyle = {
    "paddingInlineStart" : '0 !important'
  };

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Here are our options below:-</h3>
                <button className="button button--link removeAll" disabled={!props.hasOptions} onClick={props.handleRemoveAll}>Remove ALL</button>
                
            </div>
            {props.options.length === 0 && <p className="widget__message">Please enter options to get started</p>}
    
    <ol style={divStyle}>
                {
                    props.options.map((option, i) => {
                        return <Option
                            count={i + 1}
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