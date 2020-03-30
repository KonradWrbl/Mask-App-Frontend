import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, ButtonContainer, StyledSpan } from './style';
import { FullButton } from '../../components/FullButton';
import RenderField from '../renderField/RenderField';


const validate = values => {
    const errors = {};
    if (!values.visors) {
        errors.visors = 'Uzupełnij wymagane pole!';
    }
    if (!values.frames) {
        errors.frames = 'Uzupełnij wymagane pole!';
    }
    if (!values.forms) {
        errors.forms = 'Uzupełnij wymagane pole!';
    }
    if (!values.PETFilament) {
        errors.PETFilament = 'Uzupełnij wymagane pole!';
    }
    if (!values.PETFoil) {
        errors.PETFoil = 'Uzupełnij wymagane pole!';
    }
    if (!values.unitName) {
        errors.unitName = 'Uzupełnij wymagane pole!';
    }
    if (!values.unitAdress) {
        errors.unitAdress = 'Uzupełnij wymagane pole!';
    }
    if (!values.contactName) {
        errors.contactName = 'Uzupełnij wymagane pole!';
    }
    if (!values.contactSurname) {
        errors.contactSurname = 'Uzupełnij wymagane pole!';
    }
    if (!values.contactSurname) {
        errors.contactSurname = 'Uzupełnij wymagane pole!';
    }
    return errors;
}



let OrderForm = props => {
    const { handleSubmit } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field name='name' type='text' component={RenderField} label='Imię' />
            <Field name='surname' type='text' component={RenderField} label='Nazwisko' />
            <Field name='phone' type='text' component={RenderField} label='Numer telefonu' />
            <StyledSpan>Zapotrzebowanie na</StyledSpan>
            <Field name='visors' type='number' component={RenderField} label='Przyłbice' />
            <Field name='frames' type='number' component={RenderField} label='Wydrukowane ramki do przyłbic' />
            <Field name='forms' type='number' component={RenderField} label='Wycięte formatki z PET (0,5mm)' />
            <Field name='PETFilament' type='number' component={RenderField} label='Filament PET (w kg)' />
            <Field name='PETFoil' type='number' component={RenderField} label='Folie PET (w m2)' />
            <StyledSpan>Jednostka zgłaszająca</StyledSpan>
            <Field name='unitName' type='text' component={RenderField} label='Nazwa jednostki' />
            <Field name='unitAdress' type='number' component={RenderField} label='Wydrukowane ramki do przyłbic' />
            <StyledSpan>Kontakt do osoby odbierającej zamówenie w jednostce</StyledSpan>
            <Field name='contactName' type='number' component={RenderField} label='Imię' />
            <Field name='contactSurname' type='text' component={RenderField} label='Nazwisko' />
            <Field name='contactPhone' type='text' component={RenderField} label='Numer telefonu' />
            <ButtonContainer>
                <FullButton typ='submit'>Wyślij zamówienie</FullButton>
            </ButtonContainer>

        </StyledForm>
    )
}

OrderForm = reduxForm({
    form: 'Login',
    validate,
})(OrderForm)

export default OrderForm;