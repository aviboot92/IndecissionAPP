"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.decreementBtn = _this.decreementBtn.bind(_this);
        _this.incrementBtn = _this.incrementBtn.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "incrementBtn",
        value: function incrementBtn() {
            console.log("Increem");
        }
    }, {
        key: "decreementBtn",
        value: function decreementBtn() {
            console.log("Dec");
        }
    }, {
        key: "reset",
        value: function reset() {
            console.log("Reset");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Counter"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Count: ",
                    React.createElement(
                        "span",
                        { id: "count" },
                        React.createElement(
                            "b",
                            null,
                            "score"
                        )
                    )
                ),
                React.createElement("hr", null),
                React.createElement(
                    "button",
                    { onClick: this.incrementBtn },
                    "+1 plus"
                ),
                React.createElement(
                    "button",
                    { onClick: this.decreementBtn },
                    "-1 Minus"
                ),
                React.createElement(
                    "button",
                    { onClick: this.reset },
                    "RESET"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
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
