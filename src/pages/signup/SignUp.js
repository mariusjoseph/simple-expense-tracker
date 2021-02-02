import React, { useContext,useState } from 'react';
import { AppUserContext } from '../../context/AppUserContext';
import { UpdateObject } from '../../common/utility';
import Input from '../../common/Input';

const SignUp = () => {

    const appUserContext = useContext(AppUserContext); 

    const [signUpForm, setSignUpForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Full Name',
              label:'Full Name'
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
              label:'Email'
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
              label:'Password'
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
        

    }

    const signUpHandler = event => {
        console.log(event);
        event.preventDefault();

        //perform needed validation

        //pass only needed parameters
        appUserContext._signUp();
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
        </div>
    )
}

export default SignUp;