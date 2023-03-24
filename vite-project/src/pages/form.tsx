import { render } from '@testing-library/react';
import React, { ChangeEvent, Component, FormEvent } from 'react';
import FormCards from '../components/form/formCards';
import styles from './form.module.css';

const itemsCard = [];

class Form extends Component {
  state = {
    inputName: '',
    inputDate: '',
    inputCountry: '',
    inputYear: '',
    inputNow: '',
    showDate: {
      name: '',
      date: '',
    },
  };

  handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputName: e.target.value,
    });
  };
  handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputDate: e.target.value,
    });
  };
  handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      inputCountry: e.target.value,
    });
  };

  handleSub = (e: FormEvent) => {
    e.preventDefault();
    const { inputName, inputDate } = this.state;

    itemsCard.push({ name: inputName, date: inputDate });
  };

  render() {
    const { inputName, inputDate, inputCountry, inputYear, inputNow, showDate } = this.state;
    const { name, date } = showDate;

    return (
      <div className={styles.wrap}>
        <div className={styles.formPage}>
          <form onSubmit={this.handleSub}>
            <label htmlFor="fullName">Full Name</label>
            <input
              onChange={this.handleNameChange}
              value={inputName}
              type="text"
              name="fullName"
              id="fullName"
            />
            <label htmlFor="DOB">Date of Birth</label>
            <input
              onChange={this.handleDateChange}
              value={inputDate}
              type="date"
              name="DOB"
              id="DOB"
            />
            <label htmlFor="country">Country</label>
            <select onChange={this.handleCountryChange} id="country" name="country">
              <option value="">Choose a country</option>
              <option value="US">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
            <br />
            <label htmlFor="ageVerification">Are you 18 years of age or older? </label>
            <div className={styles.years}>
              <input type="checkbox" name="ageVerification" value="Yes" /> Yes
              <br />
            </div>
            <br />
            <label htmlFor="now"> Is it now?: </label>
            <div className={styles.now}>
              <input type="radio" name="now" value="Yes" /> Yes
              <br />
              <input type="radio" name="now" value="No" /> No
            </div>
            <label htmlFor="file">Upload Image: </label>
            <div className="addImg">
              <input type="file" id="file" />
              <br />
            </div>
            <br />
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
        <FormCards />
      </div>
    );
  }
}

export default Form;
