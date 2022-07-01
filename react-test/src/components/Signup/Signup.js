import React, { useState } from 'react';
import produce from 'immer';
import './Signup.css';

const App = function App() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        okayToEmail: true,
    });
    /**
     * Challenge: Connect the form to local state
     *
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        setFormData((prevState) => {
            const nextState = produce(prevState, (draft) => {
                draft[name] = value;
            });
            return nextState;
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const successMessage =
            formData.password && formData.password === formData.confirmPassword
                ? 'Successfully signed up!'
                : 'Passwords do not match.';
        const newsletterMessage = formData.okayToEmail
            ? 'Thanks for signing up for our newsletter!'
            : '';

        console.log(successMessage);
        console.log(newsletterMessage);
    };

    const jsx = (
        <div className="form-container" onSubmit={handleSubmit}>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    placeholder="Password"
                    autoComplete="on"
                    className="form--input"
                    onChange={handleChange}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    placeholder="Confirm password"
                    autoComplete="on"
                    className="form--input"
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        name="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">
                        I want to join the newsletter
                    </label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    );
    return jsx;
};
export default App;
