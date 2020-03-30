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
    padding: 30px;
    width: 100%;
    margin: 10px 0;
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
    font-weight: bold;
    font-size: 1.5em;
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