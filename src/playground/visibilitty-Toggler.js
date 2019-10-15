class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        }
        this.onSubmitBtn = this.onSubmitBtn.bind(this);
    }
    onSubmitBtn() {
            this.setState((prevState) => {
                return {
                    showDetails: !prevState.showDetails,
                }
            });    
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <hr></hr>
                <button onClick={this.onSubmitBtn}>{!this.state.showDetails ? "SHow Detailts" :"Hide Details"}</button>
                {this.state.showDetails && <p>Hi I am AVI</p>}
            </div>
        )
    }
}

ReactDOM.render(<Toggler />, document.getElementById("app"));


