import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
        // I have to Bind "this" because I am just passing function definition to onSubmit event listener in the form 
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(event) {
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
                {this.state.error && <p><b>!!!{this.state.error}!!!</b></p>}
                <form onSubmit={this.handleAddOption}>
                    <label htmlFor="addOption"> Option: </label>
                    <input type="text" className="form-control" name="addOption" id="addOption" placeholder="Add Option"></input>
                    <button type="submit">Submit</button>
                </form>
                <br></br>
            </div>

        )
    }
}