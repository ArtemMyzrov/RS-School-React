import React from 'react';
import { Items } from 'components/product.model';

const FormCards = ({ items }: { items: Items[] }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          style={{ border: '3px solid white', borderRadius: '20px', marginTop: '15px' }}
          key={item.id}
        >
          <h2>Name : {item.inputName}</h2>
          <h2>Birthday : {item.inputDate}</h2>
          <h2>From : {item.inputCountry}</h2>
          <h2>Age : {item.inputYear ? 'adult ' : 'minor '}</h2>
          <h2>Is it true ? : {item.inputNow ? 'Yes!' : 'No =)'}</h2>
          <img style={{ width: '100px', height: '100px' }} src={item.inputImg} />
        </div>
      ))}
    </div>
  );
};

export default FormCards;
