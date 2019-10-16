"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    // We need constructor function to access State
    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
            // We need to bind "this" to handlePick because in "this" is used in const declaration
        };_this.handlePick = _this.handlePick.bind(_this);
        // we need to bind "this" to handleAddOption because we have sent definition as prop value and at 'Instance' when function invoked this refers to undefined 
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        // Example call, Here this uses class instance.
        _this.sayHi();
        return _this;
    }
    // Example


    _createClass(IndecisionApp, [{
        key: "sayHallo",
        value: function sayHallo() {
            console.log("hallo");
        }
        // Here this uses class instance

    }, {
        key: "sayHi",
        value: function sayHi() {
            console.log("Hi");
            this.sayHallo();
        }
        // We didn't bind "this" to hasOption because it is invoked class Instance itself. Refer above example for more clarity

    }, {
        key: "hasOptions",
        value: function hasOptions() {
            if (this.state.options.length > 0) {
                return true;
            }
            return false;
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(randomNum);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Please enter right value";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Option already exists";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subTitle: "Put your hands in the life of COMPUTER" }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOptions: this.hasOptions() }),
                React.createElement(Options, {
                    hasOptions: this.hasOptions(),
                    handleRemoveAll: this.handleRemoveAll,
                    options: this.state.options }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h3",
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision APP"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePick, disabled: !props.hasOptions },
            "What Should I do?"
        ),
        React.createElement("hr", null)
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined
            // I have to Bind "this" because I am just passing function definition to onSubmit event listener in the form 
        };_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(event) {
            event.preventDefault();
            var newOption = event.target.elements.addOption.value.trim();

            var error = this.props.handleAddOption(newOption);
            this.setState(function () {
                return { error: error };
            });
            event.target.elements.addOption.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        null,
                        "!!!",
                        this.state.error,
                        "!!!"
                    )
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement(
                        "label",
                        { htmlFor: "addOption" },
                        " Option: "
                    ),
                    React.createElement("input", { type: "text", className: "form-control", name: "addOption", id: "addOption", placeholder: "Add Option" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Submit"
                    )
                ),
                React.createElement("br", null)
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.handleRemoveAll },
            "Remove ALL"
        ),
        React.createElement(
            "h3",
            null,
            "Here are our options below:-"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (option, i) {
                return React.createElement(Option, { key: option, option: option });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "li",
        null,
        "Option: ",
        props.option
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
