// alert("Hi");

const detail = "Hi how are you?";
let show = false;
const showDetails = () => {
    // console.log("You have clicked");
    show = !show;
    render();
}

function render() {
    var template = (
        <div>
            <h1>Visibility Toggler</h1>
            <hr></hr>
            <button onClick={showDetails}>{!show ? "Show Details" : "Hide Details"}</button>
            <br></br>
            {show && (
                <div>
                    <p>{detail}</p>
                </div>
            )}
        </div>
    );

    const appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
}

render();