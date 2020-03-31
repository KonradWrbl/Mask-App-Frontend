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
        height: 100vh;
        padding: 60px 10px;
    }

`

export const TableContainer = styled.div`
    overflow: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding: 10px;
    width: 100%;
    margin: 0px 0 10px 0;
`

export const ButtonContainer = styled.div`

`

export const StyledTable = styled.table`
    width: 100%;
    height: 200px;

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


`

export const StyledTh = styled.th`
    padding: 10px;
    min-width: 60px;

`

export const StyledTd = styled.td`
    padding: 10px;
    min-width: 60px;

`

export const DetailsContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(206,206,206,.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DetailsWrapper = styled.div`
    padding: 10px;
    width: 500px;
    height: auto;
    border-radius: 10px;
    overflow: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding: 10px;
    margin: 60px 0 10px 0;

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
    width: 100vw;
    height: 100vh;
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