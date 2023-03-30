import React from 'react';
import { useState, useRef } from 'react';
import FormCards from '../components/form/formCards';
import styles from './form.module.css';
import { Items } from 'components/product.model';

const itemsCard: Items[] = [];
let id = 0;

const isUppercase = (a: string) => {
  return /^\p{Lu}/u.test(a);
};

const Form: React.FC = () => {
  const [inputName, setInputName] = useState<string>('');
  const [inputNameError, setInputNameError] = useState<boolean>(false);
  const [inputDate, setInputDate] = useState<string>('');
  const [inputDateError, setInputDateError] = useState<boolean>(false);
  const [inputCountry, setInputCountry] = useState<string>('');
  const [inputCountryError, setInputCountryError] = useState<boolean>(false);
  const [inputYear, setInputYear] = useState<boolean>(false);
  const [inputNow, setInputNow] = useState<boolean>(false);
  const [inputImg, setInputImg] = useState<string>('');

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLSelectElement>(null);
  const inputNowRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);
  const inputImgRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setInputName(inputNameRef.current?.value || '');
    setInputDate(inputDateRef.current?.value || '');
    setInputCountry(inputCountryRef.current?.value || '');
    setInputYear(inputYearRef.current?.checked || false);
    setInputNow(inputNowRef.current?.checked || false);
    setInputImg(inputImgRef.current?.value || '');
  };

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUppercase(inputName)) {
      setInputNameError(true);
      return;
    } else {
      setInputNameError(false);
    }

    if (!inputDate) {
      setInputDateError(true);
      return;
    } else {
      setInputDateError(false);
    }
    if (!inputCountry) {
      setInputCountryError(true);
      return;
    } else {
      setInputCountryError(false);
    }

    itemsCard.push({
      inputName,
      inputDate,
      inputCountry,
      inputYear,
      inputNow,
      inputImg,
      id: id++,
    });
    setInputName('');
    setInputDate('');
    setInputCountry('');
    setInputYear(false);
    setInputNow(false);
    setInputImg('');

    window.alert(' Thanks we have added your details !');
    console.log(itemsCard);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.formPage}>
        <form onSubmit={handleSub}>
          <label htmlFor="fullName">Full Name</label>
          <input
            onChange={handleChange}
            value={inputName}
            type="text"
            placeholder="Capitalized name please"
            name="fullName"
            id="fullName"
            ref={inputNameRef}
          />
          {inputNameError && (
            <label style={{ color: 'yellow' }}>*you didn&apos;t enter a name</label>
          )}
          <label htmlFor="DOB">Date of Birth</label>
          <input
            onChange={handleChange}
            value={inputDate}
            type="date"
            name="DOB"
            id="DOB"
            ref={inputDateRef}
          />
          {inputDateError && (
            <label style={{ color: 'yellow' }}>*you have not entered a date</label>
          )}
          <label htmlFor="country">Country</label>
          <select
            value={inputCountry}
            onChange={handleChange}
            id="country"
            name="country"
            ref={inputCountryRef}
          >
            <option value="">Choose a country</option>
            <option value="US">United States of America</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
          </select>
          {inputCountryError && (
            <label style={{ color: 'yellow' }}>*you have not entered a country</label>
          )}
          <br />
          <label htmlFor="ageVerification">Are you 18 years of age or older? </label>
          <div className={styles.years}>
            <input
              onChange={handleChange}
              type="checkbox"
              name="ageVerification"
              checked={inputYear}
              ref={inputYearRef}
            />
            Yes
            <br />
          </div>
          <br />
          <label htmlFor="now"> Is it now?: </label>
          <div className={styles.now}>
            <input
              onChange={handleChange}
              type="radio"
              name="now"
              checked={inputNow}
              value="yes"
              ref={inputNowRef}
            />
            Yes
            <br />
            <input onChange={handleChange} type="radio" name="now" checked={!inputNow} value="no" />
            No
          </div>
          <label htmlFor="file">Upload Image: </label>
          <div className="addImg">
            <input
              onChange={handleChange}
              value={inputImg}
              type="file"
              id="file"
              ref={inputImgRef}
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
};

export default Form;
