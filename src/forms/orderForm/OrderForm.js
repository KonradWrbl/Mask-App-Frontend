import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, ButtonContainer, StyledSpan, TypeContainer } from './style';
import { FullButton } from '../../components/FullButton';
import RenderField from '../renderField/RenderField';
import Dropdown from '../dropdown/Dropdown'



const validate = values => {
    const errors = {};
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
    if (!values.phone) {
        errors.phone = 'Uzupełnij wymagane pole!';
    }
    if (!values.name) {
        errors.name = 'Uzupełnij wymagane pole!';
    }
    if (!values.surname) {
        errors.surname = 'Uzupełnij wymagane pole!';
    }
    if (!values.contactPhone) {
        errors.contactPhone ='Uzupełnij wymagane pole!';
    }
    return errors;
}

const types = [ "Przyłbice miękkie", "Przyłbice twarde" ]



let OrderForm = props => {
    const { handleSubmit } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field name='name' type='text' component={RenderField} label='Imię' />
            <Field name='surname' type='text' component={RenderField} label='Nazwisko' />
            <Field name='phone' type='text' component={RenderField} label='Numer telefonu' />
            <StyledSpan>Szczegóły zamówenia</StyledSpan>
            <TypeContainer>
                    {/* <Field name='maskType' valueField="value" textField="color" data={types} component={Dropdown} label='Typ przyłbicy' /> */}
                <Field name='visorsHard' type='number' component={RenderField} label='Przyłbice HD-LITE' />

                    {/* <Field name='maskType' valueField="value" textField="color" data={types} component={Dropdown} label='Typ przyłbicy' /> */}
                <Field name='visorsSoft' type='number' component={RenderField} label='Przyłbice Druk 3D' />

            </TypeContainer>
            <Field name='PETFilament' type='number' component={RenderField} label='Filament PET (w kg)' />
            <Field name='PETFoil' type='number' component={RenderField} label='Folie PET (w m2)' />
            <StyledSpan>Jednostka zgłaszająca</StyledSpan>
            <Field name='unitName' type='text' component={RenderField} label='Nazwa jednostki' />
            <Field name='unitAdress' type='text' component={RenderField} label='Adres jednostki' />
            <StyledSpan>Kontakt do osoby odbierającej zamówenie w jednostce</StyledSpan>
            <Field name='contactName' type='text' component={RenderField} label='Imię' />
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