import React from 'react';

const Input = ({
    elementType,
    elementConfig,
    value,
    invalid,
    shouldValidate,
    touched,
    changedHandler,
    label
}) => {
    let inputElement = null;

    if(invalid && shouldValidate && touched) {
        console.log('Append invalid class');
    }

    switch(elementType) 
    {
        case ('input'):
            inputElement = <input 
                {...elementConfig} 
                value={value} 
                onChange={changedHandler}
            />
        break;
        //joseph-todo - implement this later on
        case ('textarea'):
        break;
        case ('select'):
        break;
        default:
            inputElement = <input 
                {...elementConfig} 
                value={value} 
                onChange={changedHandler}
            />
    }

    return (
        <div>
            <label>{label}</label>
            {inputElement}
        </div>
    );
}

export default Input