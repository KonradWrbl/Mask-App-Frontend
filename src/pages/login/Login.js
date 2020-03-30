import React, { useState } from 'react';
import LoginForm from '../../forms/loginForm/LoginForm';
import { LoginContainer, LoginWrapper, Title, LoadingWrapper, Loader, WrongCredentials } from './style';

import axios from 'axios';

const Login = props => {

    const [ error, setError ] = useState('')
    const[ isLoading, setLoading ] = useState(false)

    const submit = values => {
        setLoading(true);

        axios.post('/login', {
            email: values.email,
            password: values.pass
        }).then(res => {
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
            </LoginWrapper>
        </LoginContainer>

    )
}

export default Login;