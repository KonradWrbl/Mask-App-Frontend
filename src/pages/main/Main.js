import React from 'react';
import { MainContainer, Title, MedicImg, H1 } from './style';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';


const Main = () => {
    return (
        <MainContainer>
            <Title>
                <H1>Lorem ipsum dolor sit amet</H1>
                <Link to='/login'>
                    <FullButton>
                        Zaloguj się / Zarejestruj się
                    </FullButton>
                </Link>
            </Title>
            <MedicImg/>
        </MainContainer>
    )
}

export default Main;