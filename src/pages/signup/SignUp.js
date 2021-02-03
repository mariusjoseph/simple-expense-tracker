import React, { useContext, useState } from 'react';
import { AppUserContext } from '../../context/AppUserContext';
import { UpdateObject, CheckValidity } from '../../common/utility';
import Input from '../../common/Input';

const SignUp = () => {

    const appUserContext = useContext(AppUserContext);

    const [signUpForm, setSignUpForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Full Name',
                label: 'Full Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email',
                label: 'Email'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'password',
            elementConfig: {
                type: 'password',
                placeholder: 'Password',
                label: 'Password'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) => {
        //
        const updatedFormElement = UpdateObject(signUpForm[inputIdentifier], {
            value: event.target.value,
            valid: CheckValidity(
                event.target.value,
                signUpForm[inputIdentifier].validation
            ),
            touched: true
        });
        const updatedSignUpForm = UpdateObject(signUpForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedSignUpForm) {
            formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
        }

        setSignUpForm(updatedSignUpForm);
        setFormIsValid(formIsValid);
    }

    const signUpHandler = event => {
        event.preventDefault();

        //perform needed validation
        const formData = {};
        for(let formElementIdentifier in signUpForm) {
            formData[formElementIdentifier] = signUpForm[formElementIdentifier].value;
        }
        if(!formIsValid) {
            alert("Form fields not valid");
        } else {
            //pass only needed parameters
            appUserContext._signUp(formData);
        }
    }

    const formElementsArray = [];
    for (let key in signUpForm) {
        formElementsArray.push({
            id: key,
            config: signUpForm[key]
        });
    }

    let formFields = (
        <form onSubmit={signUpHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changedHandler={event => inputChangedHandler(event, formElement.id)}
                    label={formElement.config.label}
                />
            ))}
            <button type="submit">Sign Up</button>
        </form>
    );

    return (
        <div>
            {formFields}
            {JSON.stringify(signUpForm)}
        </div>
    )
}

export default SignUp;