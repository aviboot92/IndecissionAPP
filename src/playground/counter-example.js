class Counter extends React.Component {
    constructor(props){
        super(props);
        this.decreementBtn = this.decreementBtn.bind(this);
        this.incrementBtn = this.incrementBtn.bind(this);
        this.reset = this.reset.bind(this);
    }
    incrementBtn(){
        console.log("Increem");
    }
    decreementBtn(){
        console.log("Dec");
    }
    reset(){
        console.log("Reset");
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>Count: <span id="count"><b>score</b></span></h2>
                <hr />
                <button onClick={this.incrementBtn}>+1 plus</button>
                <button onClick={this.decreementBtn}>-1 Minus</button>
                <button onClick={this.reset}>RESET</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// let score = 0;

// const incrementBtn = ()=>{
//     // console.log(this);
//     score+=1;
//     console.log("I am increement"+ score);
//     render();
// }

// // incrementBtn.call(window);

// const decreementBtn = ()=>{
//     score-=1;
//     console.log("I am decreement");
//     render();
// }

// const reset = () =>{
//     console.log("Reset");
//     score=0;
//     render();
// }



// const  appRoot = document.getElementById("app");
// // console.log(template2);

// function render(){
//     const template2 = ( 
//         <div>
//                 <h2>Count: <span id="count"><b>{score}</b></span></h2>
//                 <hr />
//                 <button onClick = {incrementBtn}>+1 plus</button>
//                 <button onClick = {decreementBtn}>-1 Minus</button>
//                 <button onClick= {reset}>RESET</button>
//             </div>
//     );
//     ReactDOM.render(template2, appRoot);
// }

// render();