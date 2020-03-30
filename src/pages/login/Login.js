import React, { useState } from 'react';
import LoginForm from '../../forms/loginForm/LoginForm';
import { LoginContainer, LoginWrapper, Title, RegisterWrapper, Text, LoadingWrapper, Loader, WrongCredentials } from './style';
import { FullButton } from '../../components/FullButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = props => {

    const [ error, setError ] = useState('')
    const[ isLoading, setLoading ] = useState(false)

    const submit = values => {
        console.log(values);
        setLoading(true);

        axios.post('/login', {
            email: values.email,
            password: values.pass
        }).then(res => {
            console.log(res.data);
            const FBIdToken = `Bearer ${res.data.token}`;
            localStorage.setItem('FBIdToken', FBIdToken)
            axios.defaults.headers.common['Authorization'] = FBIdToken
            setLoading(false);
            props.history.push('/');
            window.location.reload()
        }).catch(err => {
            setError(err.response.data)
            setLoading(false)
        })
    }

    return (
        <LoginContainer>
            {isLoading &&
                <LoadingWrapper>
                    <Loader>
                        <div></div>
                        <div></div>
                    </Loader>
                </LoadingWrapper>
            }

            <LoginWrapper>
                <Title>
                    Zaloguj się
                </Title>
                {error !== '' && <WrongCredentials>{error.general}</WrongCredentials>}
                <LoginForm onSubmit={submit} />
                <RegisterWrapper>
                    <Text>
                        Nie posiadasz konta?
                    </Text>
                    <Link to='/register'>
                        <FullButton>Zarejestruj się</FullButton>
                    </Link>
                </RegisterWrapper>
            </LoginWrapper>
        </LoginContainer>

    )
}

export default Login;