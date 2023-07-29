import React, { Component } from 'react';
import FormCards from '../components/form/formCards';
import styles from './form.module.css';
const itemsCard = [];
let id = 0;
const isUppercase = (a) => {
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
    inputNameRef = React.createRef();
    inputDateRef = React.createRef();
    inputCountryRef = React.createRef();
    inputNowRef = React.createRef();
    inputYearRef = React.createRef();
    inputImgRef = React.createRef();
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
    handleSub = (e) => {
        e.preventDefault();
        const { inputName, inputDate, inputCountry, inputYear, inputNow, inputImg } = this.state;
        if (!isUppercase(this.state.inputName)) {
            this.setState({ inputNameError: true });
            return;
        }
        else {
            this.setState({ inputNameError: false });
        }
        if (!this.state.inputDate) {
            this.setState({ inputDateError: true });
            return;
        }
        else {
            this.setState({ inputDateError: false });
        }
        if (!this.state.inputCountry) {
            this.setState({ inputCountryError: true });
            return;
        }
        else {
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
        return (React.createElement("div", { className: styles.wrap },
            React.createElement("div", { className: styles.formPage },
                React.createElement("form", { onSubmit: this.handleSub },
                    React.createElement("label", { htmlFor: "fullName" }, "Full Name"),
                    React.createElement("input", { onChange: this.handleChange, value: inputName, type: "text", placeholder: "Capitalized name please", name: "fullName", id: "fullName", ref: this.inputNameRef }),
                    this.state.inputNameError && (React.createElement("label", { style: { color: 'yellow' } }, "*you didn't enter a name")),
                    React.createElement("label", { htmlFor: "DOB" }, "Date of Birth"),
                    React.createElement("input", { onChange: this.handleChange, value: inputDate, type: "date", name: "DOB", id: "DOB", ref: this.inputDateRef }),
                    this.state.inputDateError && (React.createElement("label", { style: { color: 'yellow' } }, "*you have not entered a date")),
                    React.createElement("label", { htmlFor: "country" }, "Country"),
                    React.createElement("select", { value: inputCountry, onChange: this.handleChange, id: "country", name: "country", ref: this.inputCountryRef },
                        React.createElement("option", { value: "" }, "Choose a country"),
                        React.createElement("option", { value: "US" }, "United States of America"),
                        React.createElement("option", { value: "UK" }, "United Kingdom"),
                        React.createElement("option", { value: "Canada" }, "Canada")),
                    this.state.inputCountryError && (React.createElement("label", { style: { color: 'yellow' } }, "*you have not entered a country")),
                    React.createElement("br", null),
                    React.createElement("label", { htmlFor: "ageVerification" }, "Are you 18 years of age or older? "),
                    React.createElement("div", { className: styles.years },
                        React.createElement("input", { onChange: this.handleChange, type: "checkbox", name: "ageVerification", checked: inputYear, ref: this.inputYearRef }),
                        "Yes",
                        React.createElement("br", null)),
                    React.createElement("br", null),
                    React.createElement("label", { htmlFor: "now" }, " Is it now?: "),
                    React.createElement("div", { className: styles.now },
                        React.createElement("input", { onChange: this.handleChange, type: "radio", name: "now", checked: inputNow, value: "yes", ref: this.inputNowRef }),
                        "Yes",
                        React.createElement("br", null),
                        React.createElement("input", { onChange: this.handleChange, type: "radio", name: "now", checked: !inputNow, value: "no" }),
                        "No"),
                    React.createElement("label", { htmlFor: "file" }, "Upload Image: "),
                    React.createElement("div", { className: "addImg" },
                        React.createElement("input", { onChange: this.handleChange, value: inputImg, type: "file", id: "file", ref: this.inputImgRef }),
                        React.createElement("br", null)),
                    React.createElement("br", null),
                    React.createElement("button", { className: styles.submit }, "Submit"))),
            React.createElement(FormCards, { items: itemsCard })));
    }
}
export default Form;
