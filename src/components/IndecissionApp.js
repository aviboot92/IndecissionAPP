import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        options: this.props.options,
        selectedOption: this.props.selectedOption
    }
    // componentDidMOunt is a React Lifecycle method Triggers when component loads for the first Time
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState((prevState) => ({ options }));
            }
        } catch (e) {
            // Do Nothing
        }
    }
    // componentDidUpdate is a React Lifecycle method will be triggered when component gets updated at any givrn point of time. And also it will have access to the prevPorps and prevState as arguments
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // componentWillUnmount is a React Lifecycle method will be triggered when component gets deleted
    componentWillUnmount() {
        console.log("Componet will unmount");
    }
    // We didn't bind "this" to hasOption because it is invoked class Instance itself. Refer above example for more clarity
    hasOptions = () => {
        if (this.state.options.length > 0) {
            return true;
        }
        return false;
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }
    handleModalButton = () => {
        this.setState(() => ({ selectedOption: this.props.selectedOption }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return "Please enter right value";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        this.setState((prevState) => (
            { options: prevState.options.concat(option) }
        ));
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    render() {
        return (
            <div>
                <Header subTitle="Put your hands in the life of COMPUTER" />
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.hasOptions()} />
                    <Options
                        hasOptions={this.hasOptions()}
                        handleRemoveAll={this.handleRemoveAll}
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption} />
                    <AddOption handleAddOption={this.handleAddOption} />
                </div>
                <OptionModal
                    handleModalButton={this.handleModalButton}
                    selectedOption={this.state.selectedOption} />
            </div>
        )
    }
}
// settinng Default prop value of options
IndecisionApp.defaultProps = {
    options: [],
    selectedOption: undefined
}