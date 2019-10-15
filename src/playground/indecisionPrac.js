class IndecisionApp extends React.Component {
    // We need constructor function to access State
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        // We need to bind "this" to handlePick because in tis is used in const declaration
        this.handlePick = this.handlePick.bind(this);
        // we need to bind "this" to handleAddOption because we have sent definition as prop value and at 'Instance' when function invoked this refers to undefined 
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // Example call, Here this uses class instance.
        this.sayHi();
    }
    // Example
    sayHallo() {
        console.log("hallo");
    }
    // Here this uses class instance
    sayHi() {
        console.log("Hi");
        this.sayHallo();
    }
    // We didn't bind "this" to hasOption because it is invoked class Instance itself. Refer above example for more clarity
    hasOptions() {
        if (this.state.options.length > 0) {
            return true;
        }
        return false;
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(randomNum);
    }
    handleAddOption(option) {
        if (!option) {
            return "Please enter right value";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }
    handleRemoveAll() {
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    render() {
        return (
            <div>
                <Header title="Indecision APP" />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.hasOptions()} />
                <AddOption handleAddOption={this.handleAddOption} />
                <Options
                    hasOptions={this.hasOptions()}
                    handleRemoveAll={this.handleRemoveAll}
                    options={this.state.options} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>Put your hands in the life of COMPUTER</h3>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What Should I do?</button>
            <hr></hr>
        </div>
    )
}


class AddOption extends React.Component {
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
        this.setState(() => {
            return { error }
        });
        event.target.elements.addOption.value = "";
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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

const Options = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleRemoveAll}>Remove ALL</button>
            <h3>Here are our options below:-</h3>
            <ol>
                {
                    props.options.map((option, i) => {
                        return <Option key={option} option={option} />
                    })
                }
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <li>
            Option: {props.option}
        </li>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));