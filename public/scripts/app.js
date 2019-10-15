"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ["One", "TWo", "Three"]
        };
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handlePick",
        value: function handlePick() {
            var randomIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomIndex]);
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            console.log(option);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption }),
                React.createElement(Options, {
                    handleRemoveAll: this.handleRemoveAll,
                    options: this.state.options })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "IndecisionAPP"
                ),
                React.createElement(
                    "h3",
                    null,
                    "Put your life in hands of Computer"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.props.hasOptions, onClick: this.props.handlePick },
                    "What should I DO?"
                ),
                React.createElement("hr", null)
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        return _this4;
    }
    // sayHallo(){
    //     console.log("hallo");
    // }
    // sayHi(){
    //     console.log("Hi");
    //     this.sayHallo();
    // }


    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(event) {
            event.preventDefault();
            var option = event.target.elements.addOption.value.trim();
            if (option) {
                this.props.handleAddOption(option);
            }
            // this.sayHi();
            event.target.elements.addOption.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
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
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        null,
                        "Here are Options:"
                    )
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.handleRemoveAll },
                    "RemoveALL"
                ),
                React.createElement(
                    "div",
                    null,
                    this.props.options.map(function (option, i) {
                        return React.createElement(Option, { key: i, option: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                "Option: ",
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
