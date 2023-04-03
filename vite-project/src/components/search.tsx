import React, { ChangeEvent, Component } from 'react';
import styles from '../components/search.module.css';

class InputComponentState {
  textValue: string;
  constructor(textValue: string) {
    this.textValue = textValue;
  }
}

class InputComponent extends Component<{}, InputComponentState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    let storedValue = localStorage.getItem('input');
    this.state = new InputComponentState(storedValue ? storedValue : '');

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      textValue: e.target.value,
    });
  }

  componentWillUnmount() {
    localStorage.setItem('input', this.state.textValue);
  }

  render() {
    return (
      <div className={styles.search}>
        <label>Input Here :</label>
        <input
          type="text"
          name="imputname"
          autoComplete="off"
          placeholder="your name"
          onChange={this.handleChange}
          value={this.state.textValue}
        />
      </div>
    );
  }
}
export default InputComponent;
