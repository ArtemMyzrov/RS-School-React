import { render } from '@testing-library/react';
import React, { ChangeEvent, Component, FormEvent } from 'react';
import FormCards from '../components/form/formCards';
import styles from './form.module.css';
import { Items } from 'components/product.model';

const itemsCard: Items[] = [];
let id = 0;

const isUppercase = (a: string) => {
  return /^\p{Lu}/u.test(a);
};

class Form extends Component {
  state = {
    inputName: '',
    inputNameError: false,
    inputDate: '',
    inputDateError: false,
    inputCountry: '',
    inputCountryError: false,
    inputYear: false,
    inputNow: false,
    inputImg: '',
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
  handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputYear: e.target.checked,
    });
  };
  handleNowYesChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputNow: e.target.checked,
    });
  };
  handleNowNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputNow: !e.target.checked,
    });
  };
  handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputImg: e.target.value,
    });
  };

  handleSub = (e: FormEvent) => {
    e.preventDefault();
    const { inputName, inputDate, inputCountry, inputYear, inputNow, inputImg } = this.state;

    if (!isUppercase(this.state.inputName)) {
      this.setState({ inputNameError: true });
      return;
    } else {
      this.setState({ inputNameError: false });
    }

    if (!this.state.inputDate) {
      this.setState({ inputDateError: true });
      return;
    } else {
      this.setState({ inputDateError: false });
    }
    if (!this.state.inputCountry) {
      this.setState({ inputCountryError: true });
      return;
    } else {
      this.setState({ inputCountryError: false });
    }

    itemsCard.push({
      inputName: inputName,
      inputDate: inputDate,
      inputCountry: inputCountry,
      inputYear: inputYear,
      inputNow: inputNow,
      inputImg: inputImg,
      id: id++,
    });
    this.setState({
      inputName: '',
      inputNameError: false,
      inputDate: '',
      inputDateError: false,
      inputCountry: '',
      inputCountryError: false,
      inputYear: false,
      inputNow: false,
      inputImg: '',
    });

    window.alert(' Thanks we have added your details !');
    console.log(itemsCard);
  };

  render() {
    const { inputName, inputDate, inputCountry, inputYear, inputNow, inputImg } = this.state;

    return (
      <div className={styles.wrap}>
        <div className={styles.formPage}>
          <form onSubmit={this.handleSub}>
            <label htmlFor="fullName">Full Name</label>
            <input
              onChange={this.handleNameChange}
              value={inputName}
              type="text"
              placeholder="Capitalized name please"
              name="fullName"
              id="fullName"
            />
            {this.state.inputNameError && (
              <label style={{ color: 'yellow' }}>*you didn't enter a name</label>
            )}
            <label htmlFor="DOB">Date of Birth</label>
            <input
              onChange={this.handleDateChange}
              value={inputDate}
              type="date"
              name="DOB"
              id="DOB"
            />
            {this.state.inputDateError && (
              <label style={{ color: 'yellow' }}>*you have not entered a date</label>
            )}
            <label htmlFor="country">Country</label>
            <select
              value={inputCountry}
              onChange={this.handleCountryChange}
              id="country"
              name="country"
            >
              <option value="">Choose a country</option>
              <option value="US">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
            {this.state.inputCountryError && (
              <label style={{ color: 'yellow' }}>*you have not entered a country</label>
            )}
            <br />
            <label htmlFor="ageVerification">Are you 18 years of age or older? </label>
            <div className={styles.years}>
              <input
                onChange={this.handleYearChange}
                type="checkbox"
                name="ageVerification"
                checked={inputYear}
              />
              Yes
              <br />
            </div>
            <br />
            <label htmlFor="now"> Is it now?: </label>
            <div className={styles.now}>
              <input
                onChange={this.handleNowYesChange}
                type="radio"
                name="now"
                checked={inputNow}
                value="yes"
              />
              Yes
              <br />
              <input
                onChange={this.handleNowNoChange}
                type="radio"
                name="now"
                checked={!inputNow}
                value="no"
              />
              No
            </div>
            <label htmlFor="file">Upload Image: </label>
            <div className="addImg">
              <input onChange={this.handleImgChange} value={inputImg} type="file" id="file" />
              <br />
            </div>
            <br />
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
        <FormCards items={itemsCard} />
      </div>
    );
  }
}

export default Form;
