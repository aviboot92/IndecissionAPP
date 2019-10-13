// alert("C"); 
// const user = {
//     name: "VENKAT AVINASH",
//     location: "Hyderabad",
//     age: "27"
// };

// <h4>Name: {user.name ? user.name : "Om"}</h4>
//         {(user.age && user.age >= 18) && (<h4>Age: {user.age}</h4>)}
//         {getLocation(user.location)}
// const getFirstName = (name) => name.split(' ')[0];
// function getLocation(location) {
//     if (location) {
//         console.log("HI");
//         return <h4>Location:{user.location}</h4>;
//     }
// }





const app = {
    title: "Indecission App",
    subtitle: "Put your life",
    options: []
};

const appRoot = document.getElementById("app");

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        render();
    }
}

const removeAll = function () {
    app.options = [];
    render();
}

render();

const randomOption = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(randomNum);
}

function render() {
    var template = (
        <div>
            <div>
                <h2>Title: {app.title}</h2>
                {app.subtitle && <p>{app.subtitle}</p>}
                {(app.options.length > 0) ? (<p>Here are your options:</p>) : (<p>No options: </p>)}
                <ol>
                   {
                       app.options.map((option, i)=><li key={option}>) {option}</li>)
                }
                </ol>
                <br></br>
                <button disabled={app.options.length === 0} onClick={randomOption}>What should I do?</button>
                <br></br>
                <button onClick={removeAll}>Remove All</button>

                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

