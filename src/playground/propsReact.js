class IndecisionApp extends React.Component {
    
    render() {
        const title = "Indecision APP";
        const subTitle = "Put your Life in hands of computer.";
        const btnQcont = "What should I do?";
        const options = ["One", "Two", "Three"];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Qbutton content={btnQcont}/>
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTitle}</h3>
            </div>
        );
    };
}

class Qbutton extends React.Component {
    render() {
        return (
            <button>{this.props.content}</button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {this.props.options.map((option)=><Option key={option} option={option}/>)}
            </ol>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.option}>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="optionInput">Option</label>
                <input type="text" key="optionInput" name="option"></input>
            </form>);
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));