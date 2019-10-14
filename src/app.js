class IndecisionApp extends React.Component {
    render() {
        const title = "IndecisionAPP";
        const subTilte = "Put your life in hands of Computer";
        const qBtnContent = "What should I DO?";
        const options = ["One", "Two"];
        return (
            <div>
                <Header title={title} subTilte={subTilte} />
                <Action content={qBtnContent} />
                <AddOption />
                <Options options={options} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTilte}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert("ACTION");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>{this.props.content}</button>
                <hr></hr>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const newOption = e.target.elements.addOption.value.trim();
        console.log(newOption);
        if(!!newOption){
            alert(newOption);
            e.target.elements.addOption.value = "";
        }
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
    handleRemoveAll(){
        alert("removeAlll");
    }
    render() {
        return (
            <div>
                <p><b>Here are Options:</b></p>
                <button onClick={this.handleRemoveAll}>RemoveALL</button>
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