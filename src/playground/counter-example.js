let score = 0;

const incrementBtn = ()=>{
    // console.log(this);
    score+=1;
    console.log("I am increement"+ score);
    render();
}

// incrementBtn.call(window);

const decreementBtn = ()=>{
    score-=1;
    console.log("I am decreement");
    render();
}

const reset = () =>{
    console.log("Reset");
    score=0;
    render();
}



const  appRoot = document.getElementById("app");
// console.log(template2);

function render(){
    const template2 = ( 
        <div>
                <h2>Count: <span id="count"><b>{score}</b></span></h2>
                <hr />
                <button onClick = {incrementBtn}>+1 plus</button>
                <button onClick = {decreementBtn}>-1 Minus</button>
                <button onClick= {reset}>RESET</button>
            </div>
    );
    ReactDOM.render(template2, appRoot);
}

render();