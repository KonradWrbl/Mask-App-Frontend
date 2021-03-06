import styled from 'styled-components'

export const PaneContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cecece;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width: 768px) {
        min-height: 100vh;
    }

`

export const TableContainer = styled.div`
    overflow: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
`

export const ButtonContainer2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`

export const StyledTable = styled.table`
    width: 100%;
    height: auto;

    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
`

export const StyledCaption = styled.caption`
    text-align: start;
    padding: 0 10px;
    font-size: 2em;
    font-weight: semi-bold;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.3em
    }
`

export const StyledThead = styled.thead`
    background-color: #00BFA6;
    color: white;


`

export const StyledTbody = styled.tbody`


`

export const StyledTr = styled.tr`
    :nth-child(even) {
        background-color: #f2f2f2;
    }
    border: solid 1px #f2f2f2;
    @media (max-width: 768px) {
        font-size: 1em
    }
`

export const StyledTh = styled.th`
    padding: 10px;
    min-width: 60px;
    white-space: nowrap;
    @media (max-width: 768px) {
            font-size: .8em
        }

`

export const StyledTd = styled.td`
    padding: 10px;
    min-width: 60px;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: .8em
    }

`

export const StyledTdMod = styled.td`
    padding: 10px;
    min-width: 60px;
    @media (max-width: 768px) {
        font-size: .8em
    }

`

export const DetailsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(206,206,206,.6);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DetailsWrapper = styled.div`
    padding: 10px;
    width: 500px;
    border-radius: 10px;
    overflow: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding: 10px;


    @media (max-width: 768px) {
        width: 100vw;
    }
`

export const DetailsTitle = styled.div`
    font-size: 2em;
    font-weight: semi-bold;
    margin-bottom: 10px;
`

export const LoadingWrapper = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: rgba(255,255,255,.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Loader = styled.div`

    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        position: absolute;
        border: 4px solid #050505;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
    }
}
`

export const NavSpacing = styled.span`
    height: 60px;
    width: 100%;
`