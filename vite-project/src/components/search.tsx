import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from '../components/search.module.css';

const InputComponent = () => {
  const [textValue, setTextValue] = useState(() => localStorage.getItem('input') || '');

  useEffect(() => {
    localStorage.setItem('input', textValue);
  }, [textValue]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
  }

  return (
    <div className={styles.search}>
      <label>Input Here :</label>
      <input
        type="text"
        name="inputname"
        autoComplete="off"
        placeholder="your name"
        onChange={handleChange}
        value={textValue}
      />
    </div>
  );
};

export default InputComponent;
