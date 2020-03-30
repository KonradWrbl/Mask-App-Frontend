import React, { useState, useEffect } from 'react';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';
import { PaneContainer, StyledTable, StyledCaption, StyledThead, StyledTr, StyledTh, StyledTd, StyledTbody, TableContainer } from './style';
import Axios from 'axios';


const Pane = () => {

    const [orders, setOrders] = useState([])

    const onLoad = () => {
        Axios.get('/orders')
            .then((res) => {
                setOrders(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        onLoad();
    }, [])

    const ordersList = orders.map((el, key) =>
        <StyledTr key={el.orderId}>
            <StyledTd>{el.name}</StyledTd>
            <StyledTd>{el.surname}</StyledTd>
            <StyledTd>{el.visors}</StyledTd>
            <StyledTd>{el.frames}</StyledTd>
            <StyledTd>{el.forms}</StyledTd>
            <StyledTd>{el.PETFilament}</StyledTd>
            <StyledTd>{el.PETFoil}</StyledTd>
            <StyledTd>{el.createdAt}</StyledTd>
        </StyledTr>
    )


    return (
        <PaneContainer>
            <TableContainer>
                <StyledTable>
                    <StyledCaption>Zamówienia</StyledCaption>
                    <StyledThead>
                        <StyledTr>
                            <StyledTh>Imię</StyledTh>
                            <StyledTh>Nazwisko</StyledTh>
                            <StyledTh>Przyłbice</StyledTh>
                            <StyledTh>Ramki do przyłbic</StyledTh>
                            <StyledTh>formatki PET</StyledTh>
                            <StyledTh>FIlament PET</StyledTh>
                            <StyledTh>Folie PET</StyledTh>
                            <StyledTh>Data</StyledTh>
                        </StyledTr>
                    </StyledThead>
                    <StyledTbody>
                        {ordersList}

                    </StyledTbody>
                </StyledTable>
            </TableContainer>
            <Link to='/order'>
                <FullButton>
                    Złóż zamówienie
                </FullButton>
            </Link>
        </PaneContainer>
    )
}

export default Pane;