import React from 'react';
import produce from 'immer';
import './Form.css';

const Form = function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: '',
        favColor: '',
    });

    const handleChange = (e) => {
        const target = e.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormData((prevState) => {
            const nextState = produce(prevState, (draft) => {
                draft[name] = value;
            });
            return nextState;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
            />
            <input
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={
                        'unemployed' === formData.employment ? true : false
                    }
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={'part-time' === formData.employment ? true : false}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={'full-time' === formData.employment ? true : false}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <br />
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
};
export default Form;
