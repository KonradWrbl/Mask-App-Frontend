import React from 'react';
import RegisterForm from '../../forms/registerForm/RegisterForm';
import { RegisterContainer, RegisterWrapper, Title, LoadingWrapper, Loader, WrongCredentials } from './style';
import { useState } from 'react';
import Axios from 'axios';

const Login = props => {

    const [ error, setError ] = useState('')
    const[ isLoading, setLoading ] = useState(false)

    const submit = values => {
        console.log(values);
        setLoading(true);

        Axios.post('/signup', {
            name: values.name,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            password: values.pass,
            confirmPassword: values.passApprove,
            handle: values.phone
        }).then(res => {
            console.log(res.data);
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
            setLoading(false);
            props.history.push('/');
            window.location.reload()
        }).catch(err => {
            setError(err.response.data)
            setLoading(false)
        })
    }

    return (
        <RegisterContainer>
            {isLoading &&
                <LoadingWrapper>
                    <Loader>
                        <div></div>
                        <div></div>
                    </Loader>
                </LoadingWrapper>
            }
            <RegisterWrapper>
                <Title>
                    Zarejestruj się
                </Title>
                {error !== '' ? <WrongCredentials>{error.general}</WrongCredentials> : ''}
                <RegisterForm onSubmit={submit} />
            </RegisterWrapper>
        </RegisterContainer>

    )
}

export default Login;