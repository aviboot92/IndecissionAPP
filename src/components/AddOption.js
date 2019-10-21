import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (event)=> {
        event.preventDefault();
        const newOption = event.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(newOption);
        this.setState(() => ({ error }));
        if (!error) {
            event.target.elements.addOption.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-options-error"><b>!!!{this.state.error}!!!</b></p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input type="text" className="form-control add-option__input" name="addOption" id="addOption" placeholder="Add your Option"></input>
                    <button className="button" type="submit">Add Option</button>
                </form>
                <br></br>
            </div>

        )
    }
}