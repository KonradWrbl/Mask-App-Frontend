import React from 'react';
import { NavWrapper, NavLogo, NavButtons } from './style';
import { EmptyButton } from '../EmptyButton';
import { FullButton } from '../FullButton';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios'

const Nav = ({ authenticated }) => {
    const logOut = () =>{
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization']
        window.location.reload()
    }
    return(
    <NavWrapper>
        <Link to='/'>
            <NavLogo>
                LoremIpsum
            </NavLogo>
        </Link>
        <NavButtons>
            <Link smooth to="#info">
                <EmptyButton>
                    Info
                </EmptyButton>
            </Link>

            { authenticated ?
                <>
                    <Link to='/pane'>
                        <FullButton>
                            Panel
                        </FullButton>
                    </Link>
                    <FullButton onClick={logOut}>
                        Wyloguj
                    </FullButton>
                </> :
                <Link to='/login'>
                    <FullButton>
                        Zaloguj się / Zarejestruj się
                    </FullButton>
                </Link>
            }
        </NavButtons>
    </NavWrapper>
)}

export default Nav;