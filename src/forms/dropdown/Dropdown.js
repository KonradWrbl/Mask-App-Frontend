import { FieldWrapper, StyledLabel, StyledSelect, InputWrapper } from './style';
import React from 'react';


const Dropdown = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <FieldWrapper>
        <StyledLabel>{label}</StyledLabel>
        <InputWrapper>
            <StyledSelect {...input} placeholder={label} type={type}>
                <option value="Przyłbice miękkie">Przyłbice miękkie</option>
                <option value="Przyłbice twarde">Przyłbice twarde</option>
            </StyledSelect>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </InputWrapper>
    </FieldWrapper>
)

  export default Dropdown