import { FieldWrapper, StyledLabel, StyledInput, InputWrapper } from './style';
import React from 'react';


const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <FieldWrapper>
        <StyledLabel>{label}</StyledLabel>
        <InputWrapper>
        <StyledInput {...input} placeholder={label} type={type} />
        {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </InputWrapper>
    </FieldWrapper>
)

  export default RenderField