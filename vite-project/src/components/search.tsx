import React, { Component } from 'react';
import styles from '../components/search.module.css';

class InputComponent extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    let storedValue = localStorage.getItem('input');
    this.state = {
      textValue: storedValue ? storedValue : '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: { target: { value: any } }) {
    this.setState({
      textValue: e.target.value,
    });
  }

  componentWillUnmount() {
    localStorage.setItem('input', (this.state as any).textValue);
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
          value={(this.state as any).textValue}
        />
      </div>
    );
  }
}
export default InputComponent;
