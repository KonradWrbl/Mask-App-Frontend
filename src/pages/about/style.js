import styled from 'styled-components'
import { ReactComponent as Project } from '../../images/Project.svg'

export const AboutContainer = styled.div`
    width: 100%;
    padding: 10vw;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 10px;
    }
`

export const ProjectImg = styled(Project)`
    max-width: 40vw;
    max-height: 60vh;

    @media (max-width: 768px) {
        max-width: 90vw;
        max-height: 60vw;
    }
`

export const Info = styled.div`
    padding: 10px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
`

export const H2 = styled.h2`
    font-size: 2.2em;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 1;

    ::after {
        content: '';
        display: block;
        width: 90px;
        height: 30px;
        position:absolute;
        top: 15px;
        left: 15px;
        background-color: #00BFA6;
        border-radius: 10px;
        z-index: -1;

    }
`

export const InfoArea = styled.div`
    padding: 0 20px;
    font-size: 1.3em;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 50px;
`