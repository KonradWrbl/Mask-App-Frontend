import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, ButtonContainer } from './style';
import { FullButton } from '../../components/FullButton';
import RenderField from '../renderField/RenderField';

const validate = values => {
    const errors = {};
    if (!values.imie) {
        errors.imie = 'Uzupełnij wymagane pole!';
    }
    if (!values.nazwisko) {
        errors.nazwisko = 'Uzupełnij wymagane pole!';
    }
    if (!values.phone) {
        errors.phone = 'Uzupełnij wymagane pole!';
    }
    if (!values.email) {
        errors.email = 'Uzupełnij wymagane pole!';
    }
    if (!values.pass) {
        errors.pass = 'Uzupełnij wymagane pole!';
        console.log(typeof(values.pass));
    } else if(values.pass.length < 6) {
        errors.pass = 'Hasło musi zawierać min 6 znaków';
    } else if (values.pass !== values.passApprove) {
        errors.passApprove = 'Hasła nie są identyczne'
    }
    return errors;
}

let RegisterForm = props => {
    const { handleSubmit  } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field name='name' type='text' component={RenderField} label='Imię' />
            <Field name='surname' type='text' component={RenderField} label='Nazwisko' />
            <Field name='phone' type='text' component={RenderField} label='Telefon' />
            <Field name='email' type='email' component={RenderField} label='Adres e-mail' />
            <Field name='pass' type='password' component={RenderField} label='Hasło' />
            <Field name='passApprove' type='password' component={RenderField} label='Powtórz hasło' />
            <ButtonContainer>
                <FullButton typ='submit'>Zarejestruj</FullButton>
            </ButtonContainer>

        </StyledForm>
    )
}

RegisterForm = reduxForm({
    form: 'Register',
    validate,
})(RegisterForm)

export default RegisterForm;