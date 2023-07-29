import React, { Component } from 'react';
import styles from '../components/search.module.css';
class InputComponentState {
    textValue;
    constructor(textValue) {
        this.textValue = textValue;
    }
}
class InputComponent extends Component {
    constructor(props) {
        super(props);
        const storedValue = localStorage.getItem('input');
        this.state = new InputComponentState(storedValue ? storedValue : '');
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            textValue: e.target.value,
        });
    }
    componentWillUnmount() {
        localStorage.setItem('input', this.state.textValue);
    }
    render() {
        return (React.createElement("div", { className: styles.search },
            React.createElement("label", null, "Input Here :"),
            React.createElement("input", { type: "text", name: "imputname", autoComplete: "off", placeholder: "your name", onChange: this.handleChange, value: this.state.textValue })));
    }
}
export default InputComponent;
