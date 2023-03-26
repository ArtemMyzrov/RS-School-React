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

  inputNameRef = React.createRef<HTMLInputElement>();
  inputDateRef = React.createRef<HTMLInputElement>();
  inputCountryRef = React.createRef<HTMLSelectElement>();
  inputNowRef = React.createRef<HTMLInputElement>();
  inputYearRef = React.createRef<HTMLInputElement>();
  inputImgRef = React.createRef<HTMLInputElement>();

  handleChange = () => {
    this.setState({
      inputName: this.inputNameRef.current?.value,
      inputDate: this.inputDateRef.current?.value,
      inputCountry: this.inputCountryRef.current?.value,
      inputYear: this.inputYearRef.current?.checked,
      inputNow: this.inputNowRef.current?.checked,
      inputImg: this.inputImgRef.current?.value,
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
              onChange={this.handleChange}
              value={inputName}
              type="text"
              placeholder="Capitalized name please"
              name="fullName"
              id="fullName"
              ref={this.inputNameRef}
            />
            {this.state.inputNameError && (
              <label style={{ color: 'yellow' }}>*you didn't enter a name</label>
            )}
            <label htmlFor="DOB">Date of Birth</label>
            <input
              onChange={this.handleChange}
              value={inputDate}
              type="date"
              name="DOB"
              id="DOB"
              ref={this.inputDateRef}
            />
            {this.state.inputDateError && (
              <label style={{ color: 'yellow' }}>*you have not entered a date</label>
            )}
            <label htmlFor="country">Country</label>
            <select
              value={inputCountry}
              onChange={this.handleChange}
              id="country"
              name="country"
              ref={this.inputCountryRef}
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
                onChange={this.handleChange}
                type="checkbox"
                name="ageVerification"
                checked={inputYear}
                ref={this.inputYearRef}
              />
              Yes
              <br />
            </div>
            <br />
            <label htmlFor="now"> Is it now?: </label>
            <div className={styles.now}>
              <input
                onChange={this.handleChange}
                type="radio"
                name="now"
                checked={inputNow}
                value="yes"
                ref={this.inputNowRef}
              />
              Yes
              <br />
              <input
                onChange={this.handleChange}
                type="radio"
                name="now"
                checked={!inputNow}
                value="no"
              />
              No
            </div>
            <label htmlFor="file">Upload Image: </label>
            <div className="addImg">
              <input
                onChange={this.handleChange}
                value={inputImg}
                type="file"
                id="file"
                ref={this.inputImgRef}
              />
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
