import React from 'react';
const FormCards = ({ items }) => {
    return (React.createElement("div", null, items.map((item) => (React.createElement("div", { style: { border: '3px solid white', borderRadius: '20px', marginTop: '15px' }, key: item.id },
        React.createElement("h2", null,
            "Name : ",
            item.inputName),
        React.createElement("h2", null,
            "Birthday : ",
            item.inputDate),
        React.createElement("h2", null,
            "From : ",
            item.inputCountry),
        React.createElement("h2", null,
            "Age : ",
            item.inputYear ? 'adult ' : 'minor '),
        React.createElement("h2", null,
            "Is it true ? : ",
            item.inputNow ? 'Yes!' : 'No =)'),
        React.createElement("h2", null,
            "Img: ",
            item.inputImg))))));
};
export default FormCards;
