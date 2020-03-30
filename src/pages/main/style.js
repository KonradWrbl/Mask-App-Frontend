import styled from 'styled-components'
import { ReactComponent as Medic } from '../../images/Medic.svg'


export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    padding: 10vw;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
        justify-content: center;
    }
`

export const Title = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 40vh;
    }
`

export const H1 = styled.h1`
    font-size: 3em;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2em;
    }
`

export const MedicImg = styled(Medic)`
    max-width: 40vw;
    max-height: 60vh;

    @media (max-width: 768px) {
        max-width: 90vw;
        max-height: 40vh;
    }
`

export const ButtonContainer = styled.div`

`

