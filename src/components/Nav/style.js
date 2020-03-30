import styled from 'styled-components'

export const NavWrapper = styled.nav`
    position: fixed;
    padding: 10px;
    top: 0;
    width: 100%;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255,255,255,.9);
    z-index: 900;
`

export const NavLogo = styled.button`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.8em;
    border: none;
    background-color: transparent;
    color: black;


`

export const NavButtons = styled.div`
    height: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`