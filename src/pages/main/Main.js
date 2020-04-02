import React from 'react';
import { MainContainer, Title, MedicImg, H1 } from './style';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ButtonContainer } from '../../forms/orderForm/style';


const Main = ({ authenticated }) => {

    const logOut = () =>{
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization']
        window.location.reload()
    }

    return (
        <MainContainer>
            <Title>
                <H1>Drukujemy dla medyków</H1>
                { authenticated ?
                <ButtonContainer>
                    <Link to='/pane'>
                        <FullButton>
                            Panel
                        </FullButton>
                    </Link>
                    <FullButton onClick={logOut}>
                        Wyloguj
                    </FullButton>
                </ButtonContainer> :
                <Link to='/login'>
                    <FullButton>
                        Zaloguj się do panelu
                    </FullButton>
                </Link>
            }
            </Title>
            <MedicImg/>
        </MainContainer>
    )
}

export default Main;