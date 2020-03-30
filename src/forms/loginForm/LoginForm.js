import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, ButtonContainer } from './style';
import { FullButton } from '../../components/FullButton';
import RenderField from '../renderField/RenderField';


const validate = values => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Uzupełnij wymagane pole!';
    }
    if (!values.pass) {
        errors.pass = 'Uzupełnij wymagane pole!';
    }
    return errors;
}



let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field name='email' type='email' component={RenderField} label='Email' />
            <Field name='pass' type='password' component={RenderField} label='Hasło' />
            <ButtonContainer>
                <FullButton typ='submit'>Zaloguj</FullButton>
            </ButtonContainer>

        </StyledForm>
    )
}

LoginForm = reduxForm({
    form: 'Login',
    validate,
})(LoginForm)

export default LoginForm;