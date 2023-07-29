import React from 'react';
import { useForm } from 'react-hook-form';
import FormCards from '../components/form/formCards';
import styles from './form.module.css';
import { Items } from '../components/product.model';
import { useDispatch } from 'react-redux';
import {
  setFullName,
  setDOB,
  setCountry,
  setAgeVerification,
  setNow,
  setFile,
  resetForm,
} from '../redux/features/form/formSlice';

const itemsCard: Items[] = [];
let id = 0;

type Inputs = {
  fullName: string;
  DOB: string;
  country: string;
  ageVerification: boolean;
  now: string;
  file: FileList;
};

const isUppercase = (a: string) => {
  return /^\p{Lu}/u.test(a);
};

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    if (!isUppercase(data.fullName)) {
      return;
    }
    dispatch(setFullName(data.fullName));
    dispatch(setDOB(data.DOB));
    dispatch(setCountry(data.country));
    dispatch(setAgeVerification(data.ageVerification));
    dispatch(setNow(data.now));
    dispatch(setFile(data.file));
    dispatch(resetForm());

    itemsCard.push({
      inputName: data.fullName,
      inputDate: data.DOB,
      inputCountry: data.country,
      inputYear: data.ageVerification,
      inputNow: data.now === 'yes' ? true : false,
      inputImg: URL.createObjectURL(data.file[0]),
      id: id++,
    });

    window.alert('Thanks we have added your details !');
    reset();
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.formPage}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName">Full Name</label>
          <input
            {...register('fullName', {
              required: true,
              validate: (value) => isUppercase(value),
            })}
            type="text"
            placeholder="Capitalized name please"
            name="fullName"
            id="fullName"
          />
          {errors.fullName && (
            <label style={{ color: 'yellow' }}>you didn&apos;t enter a name</label>
          )}

          <label htmlFor="DOB">Date of Birth</label>
          <input {...register('DOB', { required: true })} type="date" name="DOB" id="DOB" />
          {errors.DOB && <label style={{ color: 'yellow' }}>*you have not entered a date</label>}
          <label htmlFor="country">Country</label>

          <select {...register('country', { required: true })} id="country" name="country">
            <option value="">Choose a country</option>
            <option value="US">United States of America</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
          </select>

          {errors.country && (
            <label style={{ color: 'yellow' }}>you have not entered a country</label>
          )}
          <br />
          <label htmlFor="ageVerification">Are you 18 years of age or older? </label>
          <div className={styles.years}>
            <input
              {...register('ageVerification', { required: false })}
              type="checkbox"
              name="ageVerification"
            />
            Yes
            <br />
          </div>

          <br />
          <label htmlFor="now"> Is it now?: </label>
          <div className={styles.now}>
            <input {...register('now', { required: true })} type="radio" name="now" value="yes" />
            Yes
            <br />
            <input {...register('now', { required: true })} type="radio" name="now" value="no" />
            No
          </div>
          {errors.now && <label style={{ color: 'yellow' }}>you have not select </label>}
          <label htmlFor="file">Upload Image: </label>
          <div className="addImg">
            <input {...register('file', { required: true })} type="file" name="file" id="file" />
            {errors.file && (
              <label style={{ color: 'yellow' }}>you have not uploaded an image</label>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.card}>
        <FormCards items={itemsCard} />
      </div>
    </div>
  );
};

export default Form;
