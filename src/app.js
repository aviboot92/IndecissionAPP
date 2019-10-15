class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            options:["One", "TWo", "Three"]
        }
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handlePick(){
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIndex]);

    }
    handleRemoveAll(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }
    handleAddOption(option){
        console.log(option);
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}/>
                <AddOption 
                handleAddOption={this.handleAddOption}/>
                <Options 
                    handleRemoveAll={this.handleRemoveAll} 
                    options={this.state.options} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>IndecisionAPP</h1>
                <h3>Put your life in hands of Computer</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I DO?</button>
                <hr></hr>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    // sayHallo(){
    //     console.log("hallo");
    // }
    // sayHi(){
    //     console.log("Hi");
    //     this.sayHallo();
    // }
    handleAddOption(event){
        event.preventDefault();
        const option = event.target.elements.addOption.value.trim();
        if(option){
            this.props.handleAddOption(option);
        }
        // this.sayHi();
        event.target.elements.addOption.value="";
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <label htmlFor="addOption"> Option: </label>
                <input type="text" className="form-control" name="addOption" id="addOption" placeholder="Add Option"></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p><b>Here are Options:</b></p>
                <button onClick={this.props.handleRemoveAll}>RemoveALL</button>
                <div>
                    {this.props.options.map((option,i) => <Option key={i} option={option} />)}
                </div>
            </div>
        )
    }   
}

class Option extends React.Component {
    render() {
        return (
            <p>Option: {this.props.option}</p>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));