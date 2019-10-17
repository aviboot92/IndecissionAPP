class IndecisionApp extends React.Component {
    // We need constructor function to access State
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        // We need to bind "this" to handlePick because in "this" is used in const declaration
        this.handlePick = this.handlePick.bind(this);
        // we need to bind "this" to handleAddOption because we have sent definition as prop value and at 'Instance' when function invoked this refers to undefined 
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
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
    // componentDidMOunt is a React Lifecycle method Triggers when component loads for the first Time
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState((prevState) => ({ options }));
            }
        } catch (e) {
            // Do Nothing
        }
    }
    // componentDidUpdate is a React Lifecycle method will be triggered when component gets updated at any givrn point of time. And also it will have access to the prevPorps and prevState as arguments
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // componentWillUnmount is a React Lifecycle method will be triggered when component gets deleted
    componentWillUnmount() {
        console.log("Componet will unmount");
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

        this.setState((prevState) => (
            { options: prevState.options.concat(option) }
        ));
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    render() {
        return (
            <div>
                <Header subTitle="Put your hands in the life of COMPUTER" />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.hasOptions()} />
                <Options
                    hasOptions={this.hasOptions()}
                    handleRemoveAll={this.handleRemoveAll}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
// settinng Default prop value of options
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h3>{props.subTitle}</h3>}
    </div>
);
// settinng Default prop value of title
Header.defaultProps = {
    title: "Indecision APP"
}

const Action = (props) => (
    <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What Should I do?</button>
        <hr></hr>
    </div>
)



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

const Option = (props) => {
    return (
        <li>
            Option: {props.option}
            <button onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>
        </li>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));